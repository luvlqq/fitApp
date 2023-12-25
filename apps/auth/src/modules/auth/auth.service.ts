import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { PrismaService } from '@app/db';
import { JwtService } from '@nestjs/jwt';
import { JwtTokensService } from './jwt.tokens.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Constants } from '@app/common/constants/constants';
import { MailerMicroserviceService } from '../users/mailer/mailer.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class AuthService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly jwtService: JwtService,
    private readonly repository: AuthRepository,
    private readonly jwtTokenService: JwtTokensService,
    private readonly prisma: PrismaService,
    private readonly mailer: MailerMicroserviceService,
  ) {}

  public async register(dto: AuthDto) {
    const findUser = await this.repository.foundUser(dto);

    if (findUser) {
      this.logger.error(`User with email: ${dto.email} is already exist!`, {
        service: AuthService.name,
      });
      throw new BadRequestException('User with this login is already exist');
    }

    const hashedPassword = await this.hashData(dto.password);

    const newUser = await this.repository.createNewUser(dto, hashedPassword);

    const tokens = await this.jwtTokenService.signTokens(
      newUser.id,
      newUser.email,
      newUser.role,
    );
    await this.jwtTokenService.updateRtHash(newUser.id, tokens.refreshToken);
    this.logger.info(
      `User with email: ${dto.email} has been register and logIn`,
      { service: AuthService.name },
    );
    return tokens;
  }

  public async login(dto: AuthDto) {
    const user = await this.repository.foundUser(dto);

    if (!user) {
      this.logger.error(`User with email: ${dto.email} does not found!`, {
        service: AuthService.name,
      });
      throw new NotFoundException('User are not exist!');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Access denied! Incorrect password!');
    }
    const tokens = await this.jwtTokenService.signTokens(
      user.id,
      user.email,
      user.role,
    );
    await this.jwtTokenService.updateRtHash(user.id, tokens.refreshToken);
    this.logger.info(`User with email: ${dto.email} is logIn`, {
      service: AuthService.name,
    });
    return tokens;
  }

  public async signOut(userId: number): Promise<void> {
    await this.repository.signOut(userId);
  }

  public async hashData(data: string): Promise<string> {
    const saltOrRounds = Constants.roundOfSalt;
    return await bcrypt.hash(data, saltOrRounds);
  }
}

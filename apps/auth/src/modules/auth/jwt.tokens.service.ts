import { Constants } from '@app/common/constants/constants';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from 'apps/api-gateway/src/modules/auth/auth/types';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

import { AuthRepository } from './auth.repository';

@Injectable()
export class JwtTokensService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly repository: AuthRepository,
  ) {}

  public async signToken(
    userId: number,
    email: string,
    role: string,
  ): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role,
        },
        {
          secret: this.configService.get<string>('ATSECRET'),
          expiresIn: this.configService.get<string>('ATEXPIREIN'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          role,
        },
        {
          secret: this.configService.get<string>('RTSECRET'),
          expiresIn: this.configService.get<string>('RTEXPIREIN'),
        },
      ),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }

  public async accessTokenCookie(
    res: Response,
    accessToken: string,
  ): Promise<void> {
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
    });
  }

  public async refreshTokenCookie(
    res: Response,
    refreshToken: string,
  ): Promise<void> {
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
    });
  }

  public async refreshTokens(userId: number, rt: string): Promise<void> {
    const user = await this.repository.foundUserById(userId);
    if (!user) {
      throw new NotFoundException('User are not exist');
    }
    const rtMatches = await bcrypt.compare(rt, user.hashRt);
    if (!rtMatches) {
      throw new BadRequestException('Tokens are not the same!');
    }
    const tokens = await this.signTokens(user.id, user.email, user.role);
    await this.updateRtHash(user.id, tokens.refreshToken);
  }

  public async putTokensToCookies(
    userId: number,
    email: string,
    role: string,
    res?: Response,
  ): Promise<void> {
    const tokens = await this.signToken(userId, email, role);
    await this.accessTokenCookie(res, tokens.accessToken);
    await this.refreshTokenCookie(res, tokens.refreshToken);
    await this.refreshTokens(userId, tokens.refreshToken);
  }

  public async signTokens(
    userId: number,
    email: string,
    role: string,
  ): Promise<Tokens> {
    return this.signToken(userId, email, role);
  }

  public async updateRtHash(userId: number, rt: string): Promise<void> {
    const hash = await this.hashData(rt);
    // const hash = rt;
    await this.repository.updateRtHash(userId, hash);
  }

  public async hashData(data: string): Promise<string> {
    const saltOrRounds = Constants.roundOfSalt;
    return await bcrypt.hash(data, saltOrRounds);
  }
}

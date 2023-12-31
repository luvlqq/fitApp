import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtTokensService } from './jwt.tokens.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthDto } from './dto/auth.dto';
import {
  LOGIN,
  REFRESH,
  REGISTER,
  SIGNOUT,
} from '@app/common/messages/auth/auth/constants';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtTokenService: JwtTokensService,
  ) {}

  @MessagePattern(REGISTER)
  public async register(@Payload('dto') dto: AuthDto) {
    return this.authService.register(dto);
  }

  @MessagePattern(LOGIN)
  public async login(@Payload('dto') dto: AuthDto) {
    return this.authService.login(dto);
  }

  @MessagePattern(SIGNOUT)
  public async signout(@Payload('userId') userId: number) {
    return this.authService.signOut(userId);
  }

  @MessagePattern(REFRESH)
  public async refreshTokens(
    @Payload('userId') userId: number,
    @Payload('refreshToken') refreshToken: string,
  ) {
    return this.jwtTokenService.refreshTokens(userId, refreshToken);
  }
}

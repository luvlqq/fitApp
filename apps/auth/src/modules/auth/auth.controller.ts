import {
  LOGIN,
  REFRESH,
  REGISTER,
  RESET_PASSWORD,
  SEND_RESET_CODE,
  SIGNOUT,
} from '@app/common/messages';
import { AuthDto, ResetPasswordDto } from '@app/contracts/dto/auth.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { AuthService } from './auth.service';
import { JwtTokensService } from './jwt.tokens.service';

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

  @MessagePattern(SEND_RESET_CODE)
  public async sendResetCode(@Payload('email') email: string | any) {
    return this.authService.sendResetCode(email);
  }

  @MessagePattern(RESET_PASSWORD)
  public async resetPassword(@Payload('dto') dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }
}

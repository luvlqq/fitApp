import {
  LOGIN,
  REFRESH,
  REGISTER,
  RESET_PASSWORD,
  SEND_RESET_CODE,
  SIGNOUT,
} from '@app/common/messages';
import { AuthDto, ResetPasswordDto } from '@app/contracts/dto/auth.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthGatewayService {
  constructor(@Inject('AUTH') private authClient: ClientProxy) {}

  public async login(dto: AuthDto) {
    return await lastValueFrom(this.authClient.send(LOGIN, { dto }));
  }

  public async register(dto: AuthDto) {
    return await lastValueFrom(this.authClient.send(REGISTER, { dto }));
  }

  public async signOut(userId: number) {
    return await lastValueFrom(this.authClient.send(SIGNOUT, { userId }));
  }

  public async refreshTokens(userId: number, refreshToken: string) {
    return await lastValueFrom(
      this.authClient.send(REFRESH, { userId, refreshToken }),
    );
  }

  public async sendResetCode(email: string) {
    return await lastValueFrom(
      this.authClient.send(SEND_RESET_CODE, { email }),
    );
  }

  public async resetPassword(dto: ResetPasswordDto) {
    return await lastValueFrom(this.authClient.send(RESET_PASSWORD, { dto }));
  }
}

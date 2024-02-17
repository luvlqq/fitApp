import {
  LOGIN,
  REFRESH,
  REGISTER,
  SIGNOUT,
} from '@app/common/messages/auth/auth/constants';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { AuthDto } from './dto/auth.dto';

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
}

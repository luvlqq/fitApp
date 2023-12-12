import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppleHealthGatewayService {
  constructor(@Inject('AUTH') private authClient: ClientProxy) {}

  public async createUserData(userId: number, dto) {
    return await lastValueFrom(
      this.authClient.send('', { userId: userId, dto: dto }),
    );
  }

  public async updateUserData(userId: number, dto) {
    return await lastValueFrom(
      this.authClient.send('', { userId: userId, dto: dto }),
    );
  }

  public async getUserData(userId: number) {
    return await lastValueFrom(this.authClient.send('', { userId: userId }));
  }
}

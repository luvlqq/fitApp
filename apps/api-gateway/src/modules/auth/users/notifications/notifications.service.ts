import { SEND_NOTIFICATION } from '@app/common/messages/auth/users/notifications';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class NotificationsService {
  constructor(@Inject('AUTH') private authClient: ClientProxy) {}

  public async createNotification(userId: number) {
    return await lastValueFrom(
      this.authClient.send(SEND_NOTIFICATION, { userId }),
    );
  }
}

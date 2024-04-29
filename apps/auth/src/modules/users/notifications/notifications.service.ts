import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  public async createNotification() {
    return 'Notification created';
  }
}

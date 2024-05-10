import { SEND_NOTIFICATION } from '@app/common/messages';
import { InjectQueue } from '@nestjs/bull';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Queue } from 'bull';

import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    @InjectQueue('notifications') private readonly notificationsQueue: Queue,
  ) {}

  @MessagePattern(SEND_NOTIFICATION)
  public async createNotifications(@Payload('userId') userId: number) {
    await this.notificationsQueue.add('send-weekly-notification', {
      notification: 'data',
    });
    return this.notificationsService.createNotification();
  }
}

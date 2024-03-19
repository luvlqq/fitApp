import { Controller, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetCurrentUserId } from '../../auth/decorators';
import { NotificationsService } from './notifications.service';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send-notification')
  public async createNotifications(
    @GetCurrentUserId(ParseIntPipe) userId: number,
  ) {
    return this.notificationsService.createNotification(userId);
  }
}

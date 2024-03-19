import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Module } from '@nestjs/common';

import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [RmqModule.register({ name: 'AUTH' })],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}

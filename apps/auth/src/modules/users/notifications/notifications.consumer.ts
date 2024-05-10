import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('notifications')
export class NotificationsConsumer {
  @Process('send-weekly-notification')
  public async createNotifications(job: Job) {
    console.log('Notification created', job.data);
  }
}

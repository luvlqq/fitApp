import { Global, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { MailerMicroserviceService } from './mailer.service';

@Global()
@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [MailerMicroserviceService],
  exports: [MailerMicroserviceService],
})
export class MailerMicroserviceModule {}

import { Global, Module } from '@nestjs/common';
import { MailerMicroserviceService } from './mailer.service';
import { ScheduleModule } from '@nestjs/schedule';

@Global()
@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [MailerMicroserviceService],
  exports: [MailerMicroserviceService],
})
export class MailerMicroserviceModule {}

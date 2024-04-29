import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { AtStrategy, RtStrategy } from '@auth/strategies';
import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from './auth/auth.module';
import { AuthRepository } from './auth/auth.repository';
import { MailerMicroserviceModule } from './users/mailer/mailer.module';
import { NotificationsModule } from './users/notifications/notifications.module';
import { UsersMicroserviceModule } from './users/users/users.module';

@Module({
  imports: [
    AuthModule,
    MailerMicroserviceModule,
    UsersMicroserviceModule,
    NotificationsModule,
    WinstonLoggerModule,
    JwtModule.register({}),
    RmqModule,
  ],
  providers: [AuthRepository, Logger, RtStrategy, AtStrategy],
})
export class AuthMicroserviceModule {}

import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy } from 'apps/api-gateway/src/modules/auth/auth/strategies/at.strategy';
import { RtStrategy } from 'apps/api-gateway/src/modules/auth/auth/strategies/rt.strategy';

import { AuthModule } from './auth/auth.module';
import { AuthRepository } from './auth/auth.repository';
import { MailerMicroserviceModule } from './users/mailer/mailer.module';
import { UsersMicroserviceModule } from './users/users/users.module';

@Module({
  imports: [
    AuthModule,
    MailerMicroserviceModule,
    UsersMicroserviceModule,
    WinstonLoggerModule,
    JwtModule.register({}),
    RmqModule,
  ],
  providers: [AuthRepository, Logger, RtStrategy, AtStrategy],
})
export class AuthMicroserviceModule {}

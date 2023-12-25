import { Logger, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthRepository } from './auth/auth.repository';
import { UsersMicroserviceModule } from './users/users/users.module';
import { RtStrategy } from 'apps/api-gateway/src/modules/auth/auth/strategies/rt.strategy';
import { AtStrategy } from 'apps/api-gateway/src/modules/auth/auth/strategies/at.strategy';
import { JwtModule } from '@nestjs/jwt';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { MailerMicroserviceModule } from './users/mailer/mailer.module';

@Module({
  imports: [
    AuthModule,
    MailerMicroserviceModule,
    UsersMicroserviceModule,
    JwtModule.register({}),
    RmqModule,
  ],
  providers: [AuthRepository, Logger, RtStrategy, AtStrategy],
})
export class AuthMicroserviceModule {}

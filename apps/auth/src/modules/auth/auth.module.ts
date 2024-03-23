import { AuditService } from '@app/common/audit/audit.service';
import configuration from '@app/common/configuration/configuration';
import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { MailerMicroserviceModule } from '../users/mailer/mailer.module';
import { MailerMicroserviceService } from '../users/mailer/mailer.service';
import { UsersMicroserviceModule } from '../users/users/users.module';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtTokensService } from './jwt.tokens.service';

@Module({
  imports: [
    JwtModule.register({}),
    RmqModule,
    PrismaModule,
    UsersMicroserviceModule,
    MailerMicroserviceModule,
    WinstonLoggerModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    JwtTokensService,
    MailerMicroserviceService,
    // RtStrategy,
    // AtStrategy,
    Logger,
    AuditService,
  ],
  exports: [AuthRepository, JwtTokensService],
})
export class AuthModule {}

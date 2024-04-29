import { AuditService } from '@app/common/audit/audit.service';
import configuration from '@app/common/configuration/configuration';
import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthMicroserviceModule } from 'apps/auth/src/modules/auth.module';
import { AuthRepository } from 'apps/auth/src/modules/auth/auth.repository';
import { AuthService } from 'apps/auth/src/modules/auth/auth.service';
import { JwtTokensService } from 'apps/auth/src/modules/auth/jwt.tokens.service';

import { AuthGatewayController } from './auth.controller';
import { AuthGatewayService } from './auth.service';

@Module({
  imports: [
    RmqModule.register({ name: 'AUTH' }),
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaModule,
    AuthMicroserviceModule,
    WinstonLoggerModule,
    JwtModule.register({}),
  ],
  controllers: [AuthGatewayController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    AuthGatewayService,
    AuthRepository,
    JwtTokensService,
    AuditService,
  ],
  exports: [RmqModule],
})
export class AuthGatewayModule {}

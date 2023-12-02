import { Module } from '@nestjs/common';
import { AuthGatewayService } from './auth.service';
import { AuthGatewayController } from './auth.controller';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/db';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokensService } from 'apps/auth/src/modules/auth/jwt.tokens.service';
import { AuthService } from 'apps/auth/src/modules/auth/auth.service';
import { AuthRepository } from 'apps/auth/src/modules/auth/auth.repository';
import { AuthMicroserviceModule } from 'apps/auth/src/modules/auth.module';
import configuration from '@app/common/configuration/configuration';

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
  ],
  exports: [RmqModule],
})
export class AuthGatewayModule {}

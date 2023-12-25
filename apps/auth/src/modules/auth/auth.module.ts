import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { ConfigModule } from '@nestjs/config';
import { JwtTokensService } from './jwt.tokens.service';
import configuration from '@app/common/configuration/configuration';
import { UsersMicroserviceModule } from '../users/users/users.module';
import { MailerMicroserviceModule } from '../users/mailer/mailer.module';
import { MailerMicroserviceService } from '../users/mailer/mailer.service';

@Module({
  imports: [
    JwtModule.register({}),
    RmqModule,
    PrismaModule,
    UsersMicroserviceModule,
    MailerMicroserviceModule,
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
  ],
  exports: [AuthRepository, JwtTokensService],
})
export class AuthModule {}

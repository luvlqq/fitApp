import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { UsersMicroserviceService } from './users.service';
import { PrismaModule } from '@app/db';
import { UsersMicroserviceRepository } from './users.repository';
import { AtGuard } from 'apps/api-gateway/src/modules/auth/auth/guards';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

@Module({
  imports: [
    PrismaModule,
    RmqModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [UsersMicroserviceController],
  providers: [
    UsersMicroserviceService,
    UsersMicroserviceRepository,
    AtGuard,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
  exports: [UsersMicroserviceModule],
})
export class UsersMicroserviceModule {}

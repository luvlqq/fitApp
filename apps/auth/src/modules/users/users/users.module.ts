import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from 'apps/api-gateway/src/modules/auth/auth/guards';

import { UsersMicroserviceController } from './users.controller';
import { UsersMicroserviceRepository } from './users.repository';
import { UsersMicroserviceService } from './users.service';

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

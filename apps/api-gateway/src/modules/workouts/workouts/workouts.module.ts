import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

import { WorkoutsGatewayController } from './workouts.controller';
import { WorkoutsGatewayService } from './workouts.service';

@Module({
  imports: [
    RmqModule.register({ name: 'WORKOUTS' }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: 120,
      }),
    }),
  ],
  controllers: [WorkoutsGatewayController],
  providers: [WorkoutsGatewayService],
})
export class WorkoutsGatewayModule {}

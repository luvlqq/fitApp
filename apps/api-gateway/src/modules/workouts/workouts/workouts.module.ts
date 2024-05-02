import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { LocalCacheModule } from '@app/common/redis/cache.module';
import { Module } from '@nestjs/common';

import { WorkoutsGatewayController } from './workouts.controller';
import { WorkoutsGatewayService } from './workouts.service';

@Module({
  imports: [RmqModule.register({ name: 'WORKOUTS' }), LocalCacheModule],
  controllers: [WorkoutsGatewayController],
  providers: [WorkoutsGatewayService],
})
export class WorkoutsGatewayModule {}

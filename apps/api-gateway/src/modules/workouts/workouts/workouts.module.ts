import { Module } from '@nestjs/common';
import { WorkoutsGatewayController } from './workouts.controller';
import { WorkoutsGatewayService } from './workouts.service';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

@Module({
  imports: [RmqModule.register({ name: 'WORKOUTS' })],
  controllers: [WorkoutsGatewayController],
  providers: [WorkoutsGatewayService],
})
export class WorkoutsGatewayModule {}

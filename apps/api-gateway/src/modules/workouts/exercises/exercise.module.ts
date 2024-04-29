import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Module } from '@nestjs/common';

import { ExerciseGatewayController } from './exercise.controller';
import { ExerciseGatewayService } from './exercise.service';

@Module({
  imports: [RmqModule.register({ name: 'WORKOUTS' })],
  controllers: [ExerciseGatewayController],
  providers: [ExerciseGatewayService],
})
export class ExerciseGatewayModule {}

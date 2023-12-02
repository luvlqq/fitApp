import { Module } from '@nestjs/common';
import { ExerciseGatewayController } from './exercise.controller';
import { ExerciseGatewayService } from './exercise.service';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

@Module({
  imports: [RmqModule.register({ name: 'WORKOUTS' })],
  controllers: [ExerciseGatewayController],
  providers: [ExerciseGatewayService],
})
export class ExerciseGatewayModule {}

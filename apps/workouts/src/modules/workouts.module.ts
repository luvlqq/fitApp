import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/db';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExerciseMicroserviceModule } from './exercises/exercise.module';

@Module({
  imports: [PrismaModule, WorkoutsModule, ExerciseMicroserviceModule],
  controllers: [],
  providers: [],
})
export class WorkoutsMicroserviceModule {}

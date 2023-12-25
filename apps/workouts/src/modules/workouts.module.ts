import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/db';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExerciseMicroserviceModule } from './exercises/exercise.module';
import { WinstonLoggerModule } from '@app/common/log/logger.module';

@Module({
  imports: [
    PrismaModule,
    WorkoutsModule,
    ExerciseMicroserviceModule,
    WinstonLoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class WorkoutsMicroserviceModule {}

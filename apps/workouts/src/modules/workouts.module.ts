import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';

import { ExerciseMicroserviceModule } from './exercises/exercise.module';
import { WorkoutsModule } from './workouts/workouts.module';

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

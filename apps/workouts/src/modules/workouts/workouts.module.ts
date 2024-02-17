import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WorkoutsController } from './workout.controller';
import { WorkoutsMicroserviceService } from './workout.service';
import { WorkoutsRepository } from './workouts.repository';

@Module({
  imports: [
    PrismaModule,
    RmqModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [WorkoutsController],
  providers: [WorkoutsRepository, WorkoutsMicroserviceService],
})
export class WorkoutsModule {}

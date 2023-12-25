import { Module } from '@nestjs/common';
import { WorkoutsController } from './workout.controller';
import { PrismaModule } from '@app/db';
import { WorkoutsRepository } from './workouts.repository';
import { WorkoutsMicroserviceService } from './workout.service';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

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

import { Module } from '@nestjs/common';
import { ExerciseMicroserviceController } from './exercise.controller';
import { ExerciseMicroserviceService } from './exercise.service';
import { ExerciseRepository } from './exercise.repository';
import { PrismaModule } from '@app/db';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    RmqModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [ExerciseMicroserviceController],
  providers: [ExerciseMicroserviceService, ExerciseRepository],
})
export class ExerciseMicroserviceModule {}

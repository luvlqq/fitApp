import { RmqService } from '@app/common/rabbit/rabbit.service';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';

import { WorkoutsMicroserviceModule } from './modules/workouts.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(WorkoutsMicroserviceModule, {
    cors: true,
  });
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('WORKOUTS', true));

  await app.startAllMicroservices();

  logger.log('Workouts is started', 'Microservice Init');
}
bootstrap();

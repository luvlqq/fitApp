import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common/rabbit/rabbit.service';
import { RmqOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { MealsMicroserviceModule } from './modules/mealsMicroservice.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(MealsMicroserviceModule, { cors: true });
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('MEALS', true));

  await app.startAllMicroservices();

  logger.log('Meals is started', 'Microservice Init');
}
bootstrap();

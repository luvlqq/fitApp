import { RmqService } from '@app/common/rabbit/rabbit.service';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';

import { AuthMicroserviceModule } from './modules/auth.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AuthMicroserviceModule, { cors: true });
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));

  await app.startAllMicroservices();

  logger.log('Auth is started', 'Microservice Init');
}
bootstrap();

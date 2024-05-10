import { sigInt, sigTerm } from '@app/common/configuration';
import { setupSwagger } from '@app/common/swagger/initialization/swagger.init';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import helmet from 'helmet';

import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const logger = new Logger();
  const config = new ConfigService();
  const PORT = config.get<number>('PORT');

  setupSwagger(app);

  // TODO uncommit after deploy
  // app.setGlobalPrefix('api');
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: true, credentials: true });
  app.use(cookieParser());
  app.use(helmet());
  // app.use(csurf());

  sigInt(app);
  sigTerm(app);

  logger.log('Gateway is started', 'Microservice Init');
  await app.listen(PORT || 3000);
}
bootstrap();

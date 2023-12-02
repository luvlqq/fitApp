import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { setupSwagger } from '@app/common/swagger/initialization/swagger.init';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const logger = new Logger();

  setupSwagger(app);

  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  process.on('SIGINT', async () => {
    Logger.log('Server close by user');
    await app.close();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    Logger.log('Server close by system');
    await app.close();
    process.exit(0);
  });

  logger.log('Gateway is started', 'Microservice Init');
  await app.listen(3001);
}
bootstrap();

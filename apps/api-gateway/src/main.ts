import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './modules/api-gateway/api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(3000);
}
bootstrap();

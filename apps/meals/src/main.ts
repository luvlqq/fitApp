import { NestFactory } from '@nestjs/core';
import { MealsModule } from './meals.module';

async function bootstrap() {
  const app = await NestFactory.create(MealsModule);
  await app.listen(3000);
}
bootstrap();

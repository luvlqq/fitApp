import { NestFactory } from '@nestjs/core';
import { WorkoutsModule } from './workouts.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkoutsModule);
  await app.listen(3000);
}
bootstrap();

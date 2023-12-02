import { Module } from '@nestjs/common';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [MealsModule],
})
export class MealsMicroserviceModule {}

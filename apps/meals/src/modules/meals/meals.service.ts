import { Injectable } from '@nestjs/common';

import { CreateMealDto } from './dto/create.meals.dto';
import { UpdateMealsDto } from './dto/update.meals.dto';
import { MealsMicroserviceRepository } from './meals.repository';

@Injectable()
export class MealsMicroserviceService {
  constructor(private readonly repository: MealsMicroserviceRepository) {}

  public async createMeals(dto: CreateMealDto) {
    return this.repository.createMeals(dto);
  }

  public async getAllMeals() {
    return this.repository.getAllMeals();
  }

  public async updateMeal(id: number, dto: UpdateMealsDto) {
    return this.repository.updateMeals(id, dto);
  }

  public async deleteMeals(id: number) {
    return this.repository.deleteMeals(id);
  }
}

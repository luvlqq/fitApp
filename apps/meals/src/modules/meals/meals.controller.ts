import {
  ALLMEALS,
  CREATEMEALS,
  DELETEMEALS,
  UPDATEMEALS,
} from '@app/common/messages';
import { CreateMealDto, UpdateMealsDto } from '@app/contracts/dto/meals.dto';
import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { MealsMicroserviceService } from './meals.service';

@Controller()
export class MealsController {
  constructor(private readonly mealsService: MealsMicroserviceService) {}

  @MessagePattern(ALLMEALS)
  public async getAllMeals() {
    return this.mealsService.getAllMeals();
  }

  @MessagePattern(CREATEMEALS)
  public async createMeal(@Payload('dto') dto: CreateMealDto) {
    return this.mealsService.createMeals(dto);
  }

  @MessagePattern(UPDATEMEALS)
  public async updateMeals(
    @Payload('id', ParseIntPipe) id: number,
    @Payload('dto') dto: UpdateMealsDto,
  ) {
    return this.mealsService.updateMeal(id, dto);
  }

  @MessagePattern(DELETEMEALS)
  public async deleteMeals(@Payload('id') id: number) {
    return this.mealsService.deleteMeals(id);
  }
}

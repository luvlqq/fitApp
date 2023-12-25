import { Controller, ParseIntPipe } from '@nestjs/common';
import { MealsMicroserviceService } from './meals.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateMealDto } from './dto/create.meals.dto';
import { UpdateMealsDto } from './dto/update.meals.dto';

@Controller()
export class MealsController {
  constructor(private readonly mealsService: MealsMicroserviceService) {}

  @MessagePattern('ALLMEALS')
  public async getAllMeals() {
    return this.mealsService.getAllMeals();
  }

  @MessagePattern('CREATEMEALS')
  public async createMeal(@Payload('dto') dto: CreateMealDto) {
    return this.mealsService.createMeals(dto);
  }

  @MessagePattern('UPDATEMEALS')
  public async updateMeals(
    @Payload('id', ParseIntPipe) id: number,
    @Payload('dto') dto: UpdateMealsDto,
  ) {
    return this.mealsService.updateMeal(id, dto);
  }

  @MessagePattern('DELETEMEALS')
  public async deleteMeals(@Payload('id') id: number) {
    return this.mealsService.deleteMeals(id);
  }
}

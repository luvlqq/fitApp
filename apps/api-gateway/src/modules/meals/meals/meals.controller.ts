import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateMealDto } from './dto/create.meals.dto';
import { UpdateMealsDto } from './dto/update.meals.dto';
import { MealsGatewayService } from './meals.service';

@ApiTags('Meals')
@Controller('meals')
export class MealsGatewayController {
  constructor(private readonly mealsService: MealsGatewayService) {}

  @Get()
  public async getAllMeals() {
    return this.mealsService.getAllMeals();
  }

  @Post('create')
  public async cteateMeal(@Body() dto: CreateMealDto) {
    return this.mealsService.createMeals(dto);
  }

  @Patch(':id')
  public async changeMealInfo(
    @Param('id') id: number,
    @Body() dto: UpdateMealsDto,
  ) {
    return this.mealsService.updateMeals(id, dto);
  }

  @Delete(':id')
  public async deleteMeals(@Param('id') id: number) {
    return this.mealsService.deleteMeals(id);
  }
}

import { Controller, Get } from '@nestjs/common';
import { MealsService } from './meals.service';

@Controller()
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  getHello(): string {
    return this.mealsService.getHello();
  }
}

import { PartialType } from '@nestjs/swagger';
import { CreateMealDto } from './create.meals.dto';

export class UpdateMealsDto extends PartialType(CreateMealDto) {}

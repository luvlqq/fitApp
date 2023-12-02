import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  recipe: string;

  @IsString()
  @IsNotEmpty()
  timeToPrepare: string;

  @IsNumber()
  @IsNotEmpty()
  proteins: number;

  @IsNumber()
  @IsNotEmpty()
  fats: number;

  @IsNumber()
  @IsNotEmpty()
  carbs: number;

  @IsNumber()
  @IsNotEmpty()
  kkal: number;
}

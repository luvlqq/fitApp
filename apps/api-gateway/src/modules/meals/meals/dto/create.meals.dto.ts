import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  photo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  recipe: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  timeToPrepare: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  proteins: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  fats: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  carbs: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  kkal: number;
}

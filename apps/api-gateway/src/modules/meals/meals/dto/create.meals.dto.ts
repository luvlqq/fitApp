import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMealDto {
  @ApiProperty({ description: 'Meal name', nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string;


  @ApiProperty({ description: 'Meal photo', nullable: false })
  @IsString()
  @IsNotEmpty()
  photo: string;


  @ApiProperty({ description: 'Meal description', nullable: false })
  @IsString()
  @IsNotEmpty()
  description: string;


  @ApiProperty({ description: 'Meal recipe', nullable: false })
  @IsString()
  @IsNotEmpty()
  recipe: string;

  
  @ApiProperty({ description: 'Meal time to prepare', nullable: false })
  @IsString()
  @IsNotEmpty()
  timeToPrepare: string;


  @ApiProperty({ description: 'Meal proteins', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  proteins: number;


  @ApiProperty({ description: 'Meal fats', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  fats: number;

  
  @ApiProperty({ description: 'Meal carbs', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  carbs: number;


  @ApiProperty({ description: 'Meal kkal', nullable: false })
  @IsNumber()
  @IsNotEmpty()
  kkal: number;
}

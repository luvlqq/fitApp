import { IsNumber } from 'class-validator';

export class HealthDataDto {
  @IsNumber()
  weight: number;

  @IsNumber()
  height: number;

  @IsNumber()
  age: number;
}

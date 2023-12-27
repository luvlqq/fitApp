import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class HealthDataDto {
  @ApiProperty()
  @IsNumber()
  weight: number;

  @ApiProperty()
  @IsNumber()
  height: number;

  @ApiProperty()
  @IsNumber()
  age: number;
}

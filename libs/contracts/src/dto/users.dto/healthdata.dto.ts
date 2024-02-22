import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class HealthDataDto {
  @ApiProperty({ description: 'User Weight', nullable: false })
  @IsNumber()
  weight: number;

  @ApiProperty({ description: 'User height', nullable: false })
  @IsNumber()
  height: number;

  @ApiProperty({ description: 'User age', nullable: false })
  @IsNumber()
  age: number;
}

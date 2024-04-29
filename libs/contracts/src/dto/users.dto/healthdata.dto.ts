import { ApiProperty } from '@nestjs/swagger';
import { FitnessLevel, Gender, MainUserGoal } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class HealthDataDto {
  @ApiProperty({
    description: 'User gender',
    example: 'Male',
    required: true,
    nullable: false,
  })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ description: 'User Weight', example: 80, nullable: false })
  @IsNumber()
  weight: number;

  @ApiProperty({ description: 'User height', example: 190, nullable: false })
  @IsNumber()
  height: number;

  @ApiProperty({
    description: 'User date of birth in ISO date string format',
    nullable: false,
  })
  @IsString()
  dateOfBirth: string;

  @ApiProperty({ description: 'User primary goal', nullable: false })
  @IsEnum(MainUserGoal)
  primaryGoal: MainUserGoal;

  @ApiProperty({ description: 'User fitness activity level', nullable: false })
  @IsEnum(FitnessLevel)
  fitnessLevel: FitnessLevel;
}

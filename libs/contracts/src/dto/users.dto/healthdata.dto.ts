import { ApiProperty } from '@nestjs/swagger';
import { FitnessLevel, Gender, MainUserGoal } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class HealthDataDto {
  @ApiProperty({
    description: 'User gender',
    example: 'Male',
    required: true,
    nullable: false,
    enum: Object.values(Gender),
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
    type: 'string',
    format: 'date-time',
  })
  @IsString()
  dateOfBirth: string;

  @ApiProperty({
    description: 'User primary goal',
    nullable: false,
    enum: Object.values(MainUserGoal),
  })
  @IsEnum(MainUserGoal)
  primaryGoal: MainUserGoal;

  @ApiProperty({
    description: 'User fitness activity level',
    nullable: false,
    enum: Object.values(FitnessLevel),
  })
  @IsEnum(FitnessLevel)
  fitnessLevel: FitnessLevel;
}

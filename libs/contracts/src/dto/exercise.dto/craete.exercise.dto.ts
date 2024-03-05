import { ApiProperty } from '@nestjs/swagger';
import { DifficultyLevels, groupOfMusculesENUM } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class CreateExerciseDto {
  @ApiProperty({ description: 'Exercise name', nullable: false })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Exercise description', nullable: false })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Exercise video', nullable: false })
  @IsString()
  video: string;

  @ApiProperty({ description: 'Exercise duration', nullable: false })
  @IsNumber()
  duration: number;

  @ApiProperty({ description: 'Exercise difficulty level', nullable: false })
  difficultyLevel: DifficultyLevels;

  @ApiProperty({ description: 'Exercise group of muscle', nullable: false })
  @IsString()
  groupOfMuscles: groupOfMusculesENUM;
}

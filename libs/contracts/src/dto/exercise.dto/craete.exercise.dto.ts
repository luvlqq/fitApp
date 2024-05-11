import { ApiProperty } from '@nestjs/swagger';
import { DifficultyLevels, groupOfMusculesENUM } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExerciseDto {
  @ApiProperty({ description: 'Exercise name', nullable: false })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Exercise description', nullable: false })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Count of sets', nullable: false })
  @IsString()
  sets: string;

  @ApiProperty({ description: 'Exercise video', nullable: false })
  @IsString()
  video: string;

  @ApiProperty({ description: 'Preview image' })
  @IsString()
  image: string;

  @ApiProperty({ description: 'Exercise duration', nullable: false })
  @IsNumber()
  duration: number;

  @ApiProperty({
    description: 'Exercise difficulty level',
    enum: ['Easy', 'Medium', 'Hard', 'Light_Weitgh_Baby'],
    nullable: false,
    required: false,
  })
  @IsOptional()
  difficultyLevel: DifficultyLevels;

  @ApiProperty({
    description: 'Exercise group of muscle',
    enum: [
      'Chest',
      'Back',
      'Hips',
      'Bicep',
      'Triceps',
      'Delta',
      'Press',
      'Caviar',
      'Trapezium',
      'Forearm',
    ],
    nullable: false,
    required: false,
  })
  @IsOptional()
  @IsString()
  groupOfMuscles: groupOfMusculesENUM;
}

import { ApiProperty } from '@nestjs/swagger';
import { DifficultyLevels, groupOfMusculesENUM } from '@prisma/client';
import { Transform } from 'class-transformer';
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

  @IsString()
  @ApiProperty({ description: 'Exercise video', nullable: false })
  video: string;

  @IsString()
  @ApiProperty({ description: 'Preview image' })
  image: string;

  @ApiProperty({ description: 'Exercise duration', nullable: false })
  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
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

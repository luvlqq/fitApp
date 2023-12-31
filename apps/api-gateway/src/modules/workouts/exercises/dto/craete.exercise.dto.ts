import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

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

  @ApiProperty({ description: 'Exercise group of muscule', nullable: false })
  @IsString()
  gropuOfMuscules: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  duration: Date;

  @ApiProperty()
  @IsNotEmpty()
  timeOfExercise: Date;

  @ApiProperty()
  @IsArray()
  exerciseId?: number[];
}

import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  duration: Date;

  @IsNotEmpty()
  timeOfExercise: Date;

  @IsArray()
  exerciseId?: number[];
}

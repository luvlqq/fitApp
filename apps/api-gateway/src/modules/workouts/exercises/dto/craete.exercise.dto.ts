import { IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  video: string;

  @IsString()
  gropuOfMuscules: string;
}

import { IsString } from 'class-validator';
import { groupOfMusculesENUM } from '@prisma/client';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  video: string;

  @IsString()
  gropuOfMuscules: groupOfMusculesENUM;
}

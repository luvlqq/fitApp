import { PartialType } from '@nestjs/swagger';

import { CreateExerciseDto } from './craete.exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {}

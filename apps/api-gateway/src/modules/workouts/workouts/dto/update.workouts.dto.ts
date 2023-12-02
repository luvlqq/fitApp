import { PartialType } from '@nestjs/swagger';
import { CreateWorkoutsDto } from './create.workouts.dto';

export class UpdateWorkoutsDto extends PartialType(CreateWorkoutsDto) {}

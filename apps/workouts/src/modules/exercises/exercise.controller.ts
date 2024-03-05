import {
  CREATE_EXERCISE,
  DELETE_EXERCISE,
  GET_ALL_EXERCISES,
  UPDATE_EXERCISE,
} from '@app/common/messages/workouts/exercises';
import {
  CreateExerciseDto,
  UpdateExerciseDto,
} from '@app/contracts/dto/exercise.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ExerciseMicroserviceService } from './exercise.service';

@Controller()
export class ExerciseMicroserviceController {
  constructor(private readonly exerciseService: ExerciseMicroserviceService) {}

  @MessagePattern(GET_ALL_EXERCISES)
  public async getAllexercise() {
    return this.exerciseService.getAllExercises();
  }

  @MessagePattern(CREATE_EXERCISE)
  public async createExercise(@Payload('dto') dto: CreateExerciseDto) {
    return this.exerciseService.createExercise(dto);
  }

  @MessagePattern(UPDATE_EXERCISE)
  public async updateExercise(
    @Payload('id') id: number,
    @Payload('dto') dto: UpdateExerciseDto,
  ) {
    return this.exerciseService.updateExercise(id, dto);
  }

  @MessagePattern(DELETE_EXERCISE)
  public async deleteExercise(@Payload('id') id: number) {
    return this.exerciseService.deleteExercise(id);
  }
}

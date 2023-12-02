import { Controller } from '@nestjs/common';
import { ExerciseMicroserviceService } from './exercise.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateExerciseDto } from './dto/craete.exercise.dto';
import { UpdateExerciseDto } from './dto/update.exercise.dto';

@Controller()
export class ExerciseMicroserviceController {
  constructor(private readonly exerciseService: ExerciseMicroserviceService) {}

  @MessagePattern('GET_ALL_EXERCISES')
  public async getAllexercise() {
    return this.exerciseService.getAllExercises();
  }

  @MessagePattern('CREATE_EXERCISE')
  public async createExercise(@Payload('dto') dto: CreateExerciseDto) {
    return this.exerciseService.createExercise(dto);
  }

  @MessagePattern('UPDATE_EXERCISE')
  public async updateExercise(
    @Payload('id') id: number,
    @Payload('dto') dto: UpdateExerciseDto,
  ) {
    return this.exerciseService.updateExercise(id, dto);
  }

  @MessagePattern('DELETE_EXERCISE')
  public async deleteExercise(@Payload('id') id: number) {
    return this.exerciseService.deleteExercise(id);
  }
}

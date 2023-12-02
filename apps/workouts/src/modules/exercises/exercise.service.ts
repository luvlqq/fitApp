import { Injectable } from '@nestjs/common';
import { ExerciseRepository } from './exercise.repository';
import { CreateExerciseDto } from './dto/craete.exercise.dto';
import { UpdateExerciseDto } from './dto/update.exercise.dto';

@Injectable()
export class ExerciseMicroserviceService {
  constructor(private readonly repository: ExerciseRepository) {}

  public async getAllExercises() {
    return this.repository.getAllExercises();
  }

  public async createExercise(dto: CreateExerciseDto) {
    return this.repository.createExercise(dto);
  }

  public async updateExercise(id: number, dto: UpdateExerciseDto) {
    return this.repository.updateExercise(id, dto);
  }

  public async deleteExercise(id: number) {
    return this.repository.deleteExercise(id);
  }
}

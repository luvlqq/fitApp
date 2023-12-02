import { Injectable } from '@nestjs/common';
import { WorkoutsRepository } from './workouts.repository';
import { CreateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/create.workouts.dto';
import { UpdateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/update.workouts.dto';

@Injectable()
export class WorkoutsService {
  constructor(private readonly repository: WorkoutsRepository) {}

  public async getAllWorkouts() {
    return this.repository.getAllWorkouts();
  }

  public async createWorkout(dto: CreateWorkoutsDto) {
    return this.repository.createWorkouts(dto);
  }

  public async createWorkoutByExercises(
    dto: CreateWorkoutsDto,
    exerciseId: number[],
  ) {
    return this.repository.createWorkoutByExercises(dto, exerciseId);
  }

  public async updateWorkout(id: number, dto: UpdateWorkoutsDto) {
    return this.repository.updateWorkout(id, dto);
  }

  public async deleteWorkout(id: number) {
    return this.repository.deleteWorkout(id);
  }
}

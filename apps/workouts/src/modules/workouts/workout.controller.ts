import { Controller } from '@nestjs/common';
import { WorkoutsMicroserviceService } from './workout.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/create.workouts.dto';
import { UpdateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/update.workouts.dto';

@Controller()
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsMicroserviceService) {}

  @MessagePattern('SHOW_ALL_WORKOUTS')
  public async getAllWorkouts() {
    return this.workoutsService.getAllWorkouts();
  }

  @MessagePattern('CREATE_WORKOUT')
  public async createWorkout(@Payload('dto') dto: CreateWorkoutsDto) {
    return this.workoutsService.createWorkout(dto);
  }

  @MessagePattern('CREATE_WORKOUT_BY_EXERCISES')
  public async createWorkoutByExercises(
    @Payload('dto') dto: CreateWorkoutsDto,
    @Payload('exerciseId') exerciseId: number[],
  ) {
    return this.workoutsService.createWorkoutByExercises(dto, exerciseId);
  }

  @MessagePattern('UPDATE_WORKOUT')
  public async updateWorkout(
    @Payload('id') id: number,
    @Payload('dto') dto: UpdateWorkoutsDto,
  ) {
    return this.workoutsService.updateWorkout(id, dto);
  }

  @MessagePattern('DELETE_WORKOUT')
  public async deleteWorkout(@Payload('id') id: number) {
    return this.workoutsService.deleteWorkout(id);
  }
}

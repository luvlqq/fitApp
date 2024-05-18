import {
  CREATE_WORKOUT,
  CREATE_WORKOUT_BY_EXERCISES,
  DELETE_WORKOUT,
  GENERATE_ALL_WORKOUTS_REPORT,
  GENERATE_WORKOUT_REPORT,
  SHOW_ALL_WORKOUTS,
  UPDATE_WORKOUT,
} from '@app/common/messages';
import {
  CreateWorkoutsDto,
  UpdateWorkoutsDto,
} from '@app/contracts/dto/workouts.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { WorkoutsMicroserviceService } from './workout.service';

@Controller()
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsMicroserviceService) {}

  @MessagePattern(SHOW_ALL_WORKOUTS)
  public async getAllWorkouts() {
    return this.workoutsService.getAllWorkouts();
  }

  @MessagePattern(CREATE_WORKOUT)
  public async createWorkout(@Payload('dto') dto: CreateWorkoutsDto) {
    return this.workoutsService.createWorkout(dto);
  }

  @MessagePattern(CREATE_WORKOUT_BY_EXERCISES)
  public async createWorkoutByExercises(
    @Payload('dto') dto: CreateWorkoutsDto,
    @Payload('exerciseId') exerciseId: number[],
    @Payload('video') video: Express.Multer.File,
    @Payload('image') image: Express.Multer.File,
  ) {
    return this.workoutsService.createWorkoutByExercises(
      dto,
      exerciseId,
      video,
      image,
    );
  }

  @MessagePattern(UPDATE_WORKOUT)
  public async updateWorkout(
    @Payload('id') id: number,
    @Payload('dto') dto: UpdateWorkoutsDto,
  ) {
    return this.workoutsService.updateWorkout(id, dto);
  }

  @MessagePattern(DELETE_WORKOUT)
  public async deleteWorkout(@Payload('id') id: number) {
    return this.workoutsService.deleteWorkout(id);
  }

  @MessagePattern(GENERATE_WORKOUT_REPORT)
  public async generateWorkoutReport(@Payload('workoutId') workoutId: number) {
    return null;
  }

  @MessagePattern(GENERATE_ALL_WORKOUTS_REPORT)
  public async generateAllWorkoutsReport(@Payload('userId') userId: number) {
    return null;
  }
}

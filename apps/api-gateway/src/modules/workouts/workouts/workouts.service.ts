import {
  CREATE_WORKOUT,
  CREATE_WORKOUT_BY_EXERCISES,
  DELETE_WORKOUT,
  SHOW_ALL_WORKOUTS,
  UPDATE_WORKOUT,
} from '@app/common/messages';
import {
  CreateWorkoutsDto,
  UpdateWorkoutsDto,
} from '@app/contracts/dto/workouts.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WorkoutsGatewayService {
  constructor(@Inject('WORKOUTS') private workoutsClient: ClientProxy) {}

  public async findALlWorkouts() {
    return await lastValueFrom(this.workoutsClient.send(SHOW_ALL_WORKOUTS, {}));
  }

  public async createWorkout(dto: CreateWorkoutsDto) {
    return await lastValueFrom(
      this.workoutsClient.send(CREATE_WORKOUT, { dto: dto }),
    );
  }

  public async createWorkoutByExercises(
    dto: CreateWorkoutsDto,
    exerciseId: number[],
  ) {
    return await lastValueFrom(
      this.workoutsClient.send(CREATE_WORKOUT_BY_EXERCISES, {
        dto: dto,
        exerciseId: exerciseId,
      }),
    );
  }

  public async updateWorkout(id: number, dto: UpdateWorkoutsDto) {
    return await lastValueFrom(
      this.workoutsClient.send(UPDATE_WORKOUT, { id: id, dto: dto }),
    );
  }

  public async deleteWorkout(id: number) {
    return await lastValueFrom(
      this.workoutsClient.send(DELETE_WORKOUT, { id: id }),
    );
  }
}

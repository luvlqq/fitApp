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
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ExerciseGatewayService {
  constructor(@Inject('WORKOUTS') private workoutsClient: ClientProxy) {}

  public async getAllExercises() {
    return await lastValueFrom(this.workoutsClient.send(GET_ALL_EXERCISES, {}));
  }

  public async createExercise(dto: CreateExerciseDto) {
    return await lastValueFrom(
      this.workoutsClient.send(CREATE_EXERCISE, { dto: dto }),
    );
  }

  public async updateExercise(id: number, dto: UpdateExerciseDto) {
    return await lastValueFrom(
      this.workoutsClient.send(UPDATE_EXERCISE, { id: id, dto: dto }),
    );
  }

  public async deleteExercise(id: number) {
    return await lastValueFrom(
      this.workoutsClient.send(DELETE_EXERCISE, { id: id }),
    );
  }
}

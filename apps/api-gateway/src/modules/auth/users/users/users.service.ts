import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { HealthDataDto } from './dto/healthdata.dto';
import { UpdateHealthData } from './dto/update.healthData.dto';
import {
  ADD_WORKOUT_TO_FAVORITE,
  HEALTH_DATA,
  SHOW_USER_INFO,
  SUBSCRIBE_TO_WORKOUT,
  UPDATE_HEALTH_DATA,
} from '@app/common/messages/auth/users/users';

@Injectable()
export class UsersGatewayService {
  constructor(@Inject('AUTH') private authClient: ClientProxy) {}

  public async showUserInfo(userId: number) {
    return await lastValueFrom(
      this.authClient.send(SHOW_USER_INFO, { userId: userId }),
    );
  }

  public async addHealthData(userId: number, dto: HealthDataDto) {
    return await lastValueFrom(
      this.authClient.send(HEALTH_DATA, { userId: userId, dto: dto }),
    );
  }

  public async updateHealthData(userId: number, dto: UpdateHealthData) {
    return await lastValueFrom(
      this.authClient.send(UPDATE_HEALTH_DATA, { userId: userId, dto: dto }),
    );
  }

  public async addWorkoutsToFavourite(userId: number, workoutId: number) {
    return await lastValueFrom(
      this.authClient.send(ADD_WORKOUT_TO_FAVORITE, {
        userId: userId,
        workoutId: workoutId,
      }),
    );
  }

  public async subscribeToWorkout(userId: number, workoutId: number) {
    return await lastValueFrom(
      this.authClient.send(SUBSCRIBE_TO_WORKOUT, {
        userId: userId,
        workoutId: workoutId,
      }),
    );
  }
}

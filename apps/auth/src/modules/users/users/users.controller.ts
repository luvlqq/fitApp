import {
  ADD_WORKOUT_TO_FAVORITE,
  GET_USER_HEALTH_DATA,
  HEALTH_DATA,
  SHOW_USER_INFO,
  SUBSCRIBE_TO_WORKOUT,
  UPDATE_HEALTH_DATA,
} from '@app/common/messages';
import { HealthDataDto, UpdateHealthData } from '@app/contracts/dto/users.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { UsersMicroserviceService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private readonly usersService: UsersMicroserviceService) {}

  @MessagePattern(SHOW_USER_INFO)
  public async getUserInfo(@Payload('userId') userId: number) {
    return this.usersService.getUserInfo(userId);
  }

  @MessagePattern(HEALTH_DATA)
  public async createHealthData(
    @Payload('userId') userId: number,
    @Payload('dto') dto: HealthDataDto,
  ) {
    return this.usersService.createHealthData(userId, dto);
  }

  @MessagePattern(UPDATE_HEALTH_DATA)
  public async updateHealthData(
    @Payload('userId') userId: number,
    @Payload('dto') dto: UpdateHealthData,
  ) {
    return this.usersService.updateHealthData(userId, dto);
  }

  @MessagePattern(GET_USER_HEALTH_DATA)
  public async getUserHealthData(@Payload('userId') userId: number) {
    return this.usersService.getUserHealthData(userId);
  }

  @MessagePattern(ADD_WORKOUT_TO_FAVORITE)
  public async addWorkoutToFavourites(
    @Payload('userId') userId: number,
    @Payload('workoutId') workoutId: number,
  ) {
    return this.usersService.addWorkoutToFavorite(userId, workoutId);
  }

  @MessagePattern(SUBSCRIBE_TO_WORKOUT)
  public async subscribeToWorkout(
    @Payload('userId') userId: number,
    @Payload('workoutId') workoutId: number,
  ) {
    return this.usersService.subscribeToWorkout(userId, workoutId);
  }
}

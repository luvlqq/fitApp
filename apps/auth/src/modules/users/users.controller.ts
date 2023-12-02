import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersMicroserviceService } from './users.service';
import { SHOW_USER_INFO } from 'apps/api-gateway/src/modules/auth/users/constants';
import { HealthDataDto } from 'apps/api-gateway/src/modules/auth/users/dto/healthdata.dto';
import { UpdateHealthData } from './dto/update.healthData.dto';

@Controller()
export class UsersMicroserviceController {
  constructor(private readonly usersService: UsersMicroserviceService) {}

  @MessagePattern(SHOW_USER_INFO)
  public async getUserInfo(@Payload('userId') userId: number) {
    return this.usersService.getUserInfo(userId);
  }

  @MessagePattern('HEALTH_DATA')
  public async createHealthData(
    @Payload('userId') userId: number,
    @Payload('dto') dto: HealthDataDto,
  ) {
    return this.usersService.createHealthData(userId, dto);
  }

  @MessagePattern('UPDATE_HEALTH_DATA')
  public async updateHealthData(
    @Payload('userId') userId: number,
    @Payload('dto') dto: UpdateHealthData,
  ) {
    return this.usersService.updateHealthData(userId, dto);
  }

  @MessagePattern('ADD_WORKOUT_TO_FAVORITE')
  public async addWorkoutToFavourites(
    @Payload('userId') userId: number,
    @Payload('workoutId') workoutId: number,
  ) {
    return this.usersService.addWorkoutToFavorite(userId, workoutId);
  }

  @MessagePattern('SUBSCRIBE_TO_WORKOUT')
  public async subscribeToWorkout(
    @Payload('userId') userId: number,
    @Payload('workoutId') workoutId: number,
  ) {
    return this.usersService.subscribeToWorkout(userId, workoutId);
  }
}

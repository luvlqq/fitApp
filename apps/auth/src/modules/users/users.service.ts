import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersMicroserviceRepository } from './users.repository';
import { HealthDataDto } from 'apps/api-gateway/src/modules/auth/users/dto/healthdata.dto';
import { UpdateHealthData } from './dto/update.healthData.dto';

@Injectable()
export class UsersMicroserviceService {
  constructor(private readonly repository: UsersMicroserviceRepository) {}

  public async getUserInfo(userId: number) {
    return this.repository.findUserInfo(userId);
  }

  public async createHealthData(userId: number, dto: HealthDataDto) {
    const checkHealthStatus = await this.repository.findUserHealthData(userId);
    if (checkHealthStatus) {
      throw new BadRequestException('User are have health data');
    }
    return this.repository.createHealthData(userId, dto);
  }

  public async updateHealthData(userId: number, dto: UpdateHealthData) {
    const checkHealthStatus = await this.repository.findUserHealthData(userId);
    if (checkHealthStatus) {
      throw new BadRequestException('User dont have health data');
    }
    return await this.repository.updateHealthData(userId, dto);
  }

  public async addWorkoutToFavorite(userId: number, workoutId: number) {
    return this.repository.addWorkoutToFavorite(userId, workoutId);
  }

  public async subscribeToWorkout(userId: number, workoutId: number) {
    return this.repository.subscribeUserToWorkout(userId, workoutId);
  }
}

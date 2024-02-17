import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HealthDataDto } from 'apps/api-gateway/src/modules/auth/users/users/dto/healthdata.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { UpdateHealthData } from './dto/update.healthData.dto';
import { UsersMicroserviceRepository } from './users.repository';

@Injectable()
export class UsersMicroserviceService {
  constructor(
    private readonly repository: UsersMicroserviceRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  public async getUserInfo(userId: number) {
    return this.repository.findUserInfo(userId);
  }

  public async createHealthData(userId: number, dto: HealthDataDto) {
    const checkHealthStatus = await this.repository.findUserHealthData(userId);
    if (checkHealthStatus) {
      this.logger.error(`User ${userId} already has a health data`, {
        service: UsersMicroserviceService.name,
      });
      throw new BadRequestException('User are have health data');
    }
    return this.repository.createHealthData(userId, dto);
  }

  public async updateHealthData(userId: number, dto: UpdateHealthData) {
    const checkHealthStatus = await this.repository.findUserHealthData(userId);
    if (checkHealthStatus) {
      this.logger.error(`User ${userId} dont have health data`, {
        service: UsersMicroserviceService.name,
      });
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

import { AuditService } from '@app/common/audit/audit.service';
import { AwsService } from '@app/common/aws/aws.service';
import {
  CreateWorkoutsDto,
  UpdateWorkoutsDto,
} from '@app/contracts/dto/workouts.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Workouts } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { WorkoutsRepository } from './workouts.repository';

@Injectable()
export class WorkoutsMicroserviceService {
  constructor(
    private readonly repository: WorkoutsRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly audit: AuditService,
    private readonly uploadService: AwsService,
  ) {}

  public async getAllWorkouts(): Promise<Workouts[]> {
    return this.errorWrapper(() => this.repository.getAllWorkouts());
  }

  public async createWorkout(dto: CreateWorkoutsDto): Promise<Workouts> {
    return this.errorWrapper(() => this.repository.createWorkouts(dto));
  }

  public async createWorkoutByExercises(
    dto: CreateWorkoutsDto,
    exerciseId: number[],
    video: Express.Multer.File,
    image: Express.Multer.File,
  ): Promise<Workouts> {
    const uploadedVideoUrl = await this.uploadService.uploadFile(video);
    const uploadedImageUrl = await this.uploadService.uploadFile(image);

    return this.errorWrapper(() =>
      this.repository.createWorkoutByExercises(
        dto,
        uploadedVideoUrl,
        uploadedImageUrl,
      ),
    );
  }

  public async updateWorkout(
    id: number,
    dto: UpdateWorkoutsDto,
  ): Promise<Workouts> {
    return this.errorWrapper(() => this.repository.updateWorkout(id, dto));
  }

  public async deleteWorkout(id: number): Promise<Workouts> {
    return this.errorWrapper(() => this.repository.deleteWorkout(id));
  }

  public async getAllUserWorkouts(userId: number) {
    return this.errorWrapper(() => this.repository.getAllUserWorkouts(userId));
  }

  /**
   * Wrapped function for catch errors and log them
   * @param fn -> function
   * @returns function result or Error
   */
  public async errorWrapper<T>(
    fn: () => Promise<T>,
    id?: number,
    dto?: unknown,
  ): Promise<T> {
    try {
      return await fn();
    } catch (e) {
      if (id !== undefined && dto !== undefined) {
        await this.audit.createAuditLog(
          WorkoutsMicroserviceService.name,
          '',
          String(e),
        );
        this.logger.error(
          `Workout with id: ${id} and ${JSON.stringify(dto)} has an error`,
          {
            service: WorkoutsMicroserviceService.name,
          },
        );
      } else if (id !== undefined) {
        await this.audit.createAuditLog(
          WorkoutsMicroserviceService.name,
          '',
          String(e),
        );
        this.logger.error(`Workout with id: ${id} has an error`, {
          service: WorkoutsMicroserviceService.name,
        });
      } else {
        await this.audit.createAuditLog(
          WorkoutsMicroserviceService.name,
          '',
          String(e),
        );
        this.logger.error(`Error ${e}`, {
          service: WorkoutsMicroserviceService.name,
        });
      }
      throw new Error(e);
    }
  }
}

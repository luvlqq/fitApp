import { Inject, Injectable } from '@nestjs/common';
import { WorkoutsRepository } from './workouts.repository';
import { CreateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/create.workouts.dto';
import { UpdateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/update.workouts.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Workouts } from '@prisma/client';

@Injectable()
export class WorkoutsMicroserviceService {
  constructor(
    private readonly repository: WorkoutsRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
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
  ): Promise<Workouts> {
    return this.errorWrapper(() =>
      this.repository.createWorkoutByExercises(dto, exerciseId),
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
        this.logger.error(
          `Workout with id: ${id} and ${JSON.stringify(dto)} has an error`,
          {
            service: WorkoutsMicroserviceService.name,
          },
        );
      } else if (id !== undefined) {
        this.logger.error(`Workout with id: ${id} has an error`, {
          service: WorkoutsMicroserviceService.name,
        });
      } else {
        this.logger.error(`Error ${e}`, {
          service: WorkoutsMicroserviceService.name,
        });
      }
      throw new Error(e);
    }
  }
}

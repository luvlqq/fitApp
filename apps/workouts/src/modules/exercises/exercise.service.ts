import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { CreateExerciseDto } from './dto/craete.exercise.dto';
import { UpdateExerciseDto } from './dto/update.exercise.dto';
import { ExerciseRepository } from './exercise.repository';

@Injectable()
export class ExerciseMicroserviceService {
  constructor(
    private readonly repository: ExerciseRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  public async getAllExercises(): Promise<Exercise[]> {
    return this.errorWrapper(() => this.repository.getAllExercises());
  }

  public async createExercise(dto: CreateExerciseDto) {
    return this.errorWrapper(() => this.repository.createExercise(dto));
  }

  public async updateExercise(id: number, dto: UpdateExerciseDto) {
    return this.errorWrapper(() => this.repository.updateExercise(id, dto));
  }

  public async deleteExercise(id: number) {
    return this.errorWrapper(() => this.repository.deleteExercise(id));
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
        this.logger.error(`Exercise with id: ${id} and ${dto} has an error`, {
          service: ExerciseMicroserviceService.name,
        });
      } else if (id !== undefined) {
        this.logger.error(`Exercise with id: ${id} has an error`, {
          service: ExerciseMicroserviceService.name,
        });
      } else {
        this.logger.error(`Error ${e}`, {
          service: ExerciseMicroserviceService.name,
        });
      }
      throw new Error(e);
    }
  }
}

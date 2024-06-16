import { AuditService } from '@app/common/audit/audit.service';
import { AwsService } from '@app/common/aws/aws.service';
import {
  CreateExerciseDto,
  UpdateExerciseDto,
} from '@app/contracts/dto/exercise.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

import { ExerciseRepository } from './exercise.repository';

@Injectable()
export class ExerciseMicroserviceService {
  constructor(
    private readonly repository: ExerciseRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly audit: AuditService,
    private readonly uploadService: AwsService,
  ) {}

  public async getAllExercises(): Promise<Exercise[]> {
    return this.errorWrapper(() => this.repository.getAllExercises());
  }

  public async createExercise(
    dto: CreateExerciseDto,
    image: Express.Multer.File,
    video: Express.Multer.File,
  ) {
    const uploadedVideoUrl = await this.uploadService.uploadFile(video);
    const uploadedImageUrl = await this.uploadService.uploadFile(image);

    return this.errorWrapper(() =>
      this.repository.createExercise(dto, uploadedImageUrl, uploadedVideoUrl),
    );
  }

  public async createLocal(dto: CreateExerciseDto) {
    console.log('dto', dto);
    return this.errorWrapper(() => this.repository.createLocal(dto));
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
      await this.audit.createAuditLog(
        ExerciseMicroserviceService.name,
        '',
        String(e),
      );
      if (id !== undefined && dto !== undefined) {
        this.logger.error(`Exercise with id: ${id} and ${dto} has an error`, {
          service: ExerciseMicroserviceService.name,
        });
      } else if (id !== undefined) {
        await this.audit.createAuditLog(
          ExerciseMicroserviceService.name,
          '',
          String(e),
        );
        this.logger.error(`Exercise with id: ${id} has an error`, {
          service: ExerciseMicroserviceService.name,
        });
      } else {
        await this.audit.createAuditLog(
          ExerciseMicroserviceService.name,
          '',
          String(e),
        );
        this.logger.error(`Error ${e}`, {
          service: ExerciseMicroserviceService.name,
        });
      }
      throw new Error(e);
    }
  }
}

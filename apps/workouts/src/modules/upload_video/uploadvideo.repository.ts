import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadVideoRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async uploadVideoToExercise(exerciseId: number, video: string) {
    return this.prisma.exercise.update({
      where: { id: exerciseId },
      data: { video: video },
    });
  }
}

import {
  CreateExerciseDto,
  UpdateExerciseDto,
} from '@app/contracts/dto/exercise.dto';
import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllExercises() {
    return this.prisma.exercise.findMany();
  }

  public async createExercise(
    dto: CreateExerciseDto,
    image: string,
    video: string,
  ) {
    return this.prisma.exercise.create({
      data: { ...dto, video: video, image: image },
    });
  }

  public async createLocal(dto: CreateExerciseDto) {
    return this.prisma.exercise.create({ data: { ...dto } });
  }

  public async updateExercise(id: number, dto: UpdateExerciseDto) {
    return this.prisma.exercise.update({ where: { id: id }, data: { ...dto } });
  }

  public async deleteExercise(id: number) {
    return this.prisma.exercise.delete({ where: { id: id } });
  }
}

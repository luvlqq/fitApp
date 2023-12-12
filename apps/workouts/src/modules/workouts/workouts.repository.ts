import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';
import { CreateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/create.workouts.dto';
import { UpdateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/update.workouts.dto';

@Injectable()
export class WorkoutsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllWorkouts() {
    return this.prisma.workouts.findMany({
      include: { Exercise: true, user: true },
    });
  }

  public async createWorkouts(dto: CreateWorkoutsDto) {
    return this.prisma.workouts.create({ data: { ...dto } });
  }

  public async createWorkoutByExercises(
    dto: CreateWorkoutsDto,
    exerciseId: number[],
  ) {
    return this.prisma.workouts.create({
      data: {
        name: dto.name,
        description: dto.description,
        duration: dto.duration,
        timeOfExercise: dto.timeOfExercise,
        Exercise: {
          connect: exerciseId.map((id) => ({ id })),
        },
      },
    });
  }

  public async updateWorkout(id: number, dto: UpdateWorkoutsDto) {
    return this.prisma.workouts.update({ where: { id: id }, data: { ...dto } });
  }

  public async deleteWorkout(id: number) {
    return this.prisma.workouts.delete({ where: { id } });
  }
}

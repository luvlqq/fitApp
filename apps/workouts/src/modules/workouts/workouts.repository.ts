import {
  CreateWorkoutsDto,
  UpdateWorkoutsDto,
} from '@app/contracts/dto/workouts.dto';
import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllWorkouts() {
    return this.prisma.workouts.findMany({
      include: {
        WorkoutToExercise: { include: { exercise: true } },
        user: true,
      },
    });
  }

  public async createWorkouts(dto: CreateWorkoutsDto) {
    // return this.prisma.workouts.create({ data: { ...dto } });
    return null;
  }

  public async createWorkoutByExercises(
    dto: CreateWorkoutsDto,
    video: string,
    image: string,
  ) {
    const createdWorkout = await this.prisma.workouts.create({
      data: {
        name: dto.name,
        description: dto.description,
        duration: dto.duration,
        videoUrl: video,
        imageUrl: image,
      },
    });

    await Promise.all(
      dto.exerciseIds.map((exerciseId) =>
        this.prisma.workoutToExercise.create({
          data: {
            workoutId: createdWorkout.id,
            exerciseId: exerciseId,
          },
        }),
      ),
    );

    return createdWorkout;
  }

  public async updateWorkout(id: number, dto: UpdateWorkoutsDto) {
    return this.prisma.workouts.update({ where: { id: id }, data: { ...dto } });
  }

  public async deleteWorkout(id: number) {
    return this.prisma.workouts.delete({ where: { id } });
  }

  public async getAllUserWorkouts(userId: number) {
    return this.prisma.workouts.findMany({ where: { userId: userId } });
  }
}

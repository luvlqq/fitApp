import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';
import { HealthDataDto } from 'apps/api-gateway/src/modules/auth/users/dto/healthdata.dto';
import { UpdateHealthData } from './dto/update.healthData.dto';

@Injectable()
export class UsersMicroserviceRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findUserInfo(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        Workouts: true,
        HealthData: true,
        FavouriteWorkouts: true,
        Achivments: true,
        Goals: true,
        NutrionPlans: true,
      },
    });
  }

  public async createHealthData(userId: number, dto: HealthDataDto) {
    return this.prisma.healthData.create({ data: { userId: userId, ...dto } });
  }

  public async findUserHealthData(userId: number) {
    return await this.prisma.healthData.findUnique({
      where: { userId: userId },
    });
  }

  public async updateHealthData(userId: number, dto: UpdateHealthData) {
    return await this.prisma.healthData.update({
      where: { userId: userId },
      data: { ...dto },
    });
  }

  public async addWorkoutToFavorite(userId: number, workoutId: number) {
    return this.prisma.favouriteWorkouts.create({
      data: { userId: userId, workoutId: workoutId },
    });
  }

  public async subscribeUserToWorkout(userId: number, workoutId: number) {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        Workouts: {
          connect: { id: workoutId },
        },
      },
    });
    return this.prisma.workouts.findUnique({ where: { id: workoutId } });
  }
}

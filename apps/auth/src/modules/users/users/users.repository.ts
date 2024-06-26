import { HealthDataDto, UpdateHealthData } from '@app/contracts/dto/users.dto';
import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';
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
        Achievements: true,
        Goals: true,
        NutrionPlans: true,
      },
    });
  }

  public async createHealthData(
    userId: number,
    dto: HealthDataDto,
    userAge: number,
  ) {
    return this.prisma.healthData.create({
      data: { user: { connect: { id: userId } }, age: userAge, ...dto },
    });
  }

  public async findUserHealthData(userId: number) {
    return this.prisma.healthData.findUnique({
      where: { userId: userId },
    });
  }

  public async updateHealthData(userId: number, dto: UpdateHealthData) {
    return this.prisma.healthData.update({
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

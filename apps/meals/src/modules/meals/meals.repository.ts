import { CreateMealDto, UpdateMealsDto } from '@app/contracts/dto/meals.dto';
import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MealsMicroserviceRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async createMeals(dto: CreateMealDto) {
    return this.prisma.meals.create({ data: { ...dto } });
  }

  public async getAllMeals() {
    return this.prisma.meals.findMany();
  }

  // TODO Написать проверку на существование милса
  public async updateMeals(id: number, dto: UpdateMealsDto) {
    return this.prisma.meals.update({ where: { id: id }, data: { ...dto } });
  }

  public async deleteMeals(id: number) {
    return this.prisma.meals.delete({ where: { id: +id } });
  }
}

import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create.meals.dto';
import { UpdateMealsDto } from './dto/update.meals.dto';

@Injectable()
export class MealsMicroserviceRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async createMeals(dto: CreateMealDto) {
    return await this.prisma.meals.create({ data: { ...dto } });
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

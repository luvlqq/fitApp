import {
  ALLMEALS,
  CREATEMEALS,
  DELETEMEALS,
  UPDATEMEALS,
} from '@app/common/messages';
import { CreateMealDto, UpdateMealsDto } from '@app/contracts/dto/meals.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MealsGatewayService {
  constructor(@Inject('MEALS') private mealsClient: ClientProxy) {}

  public async getAllMeals() {
    return await lastValueFrom(this.mealsClient.send(ALLMEALS, {}));
  }

  public async createMeals(dto: CreateMealDto) {
    return await lastValueFrom(
      this.mealsClient.send(CREATEMEALS, { dto: dto }),
    );
  }

  public async updateMeals(id: number, dto: UpdateMealsDto) {
    return await lastValueFrom(
      this.mealsClient.send(UPDATEMEALS, { id: id, dto: dto }),
    );
  }

  public async deleteMeals(id: number) {
    return await lastValueFrom(this.mealsClient.send(DELETEMEALS, { id: id }));
  }
}

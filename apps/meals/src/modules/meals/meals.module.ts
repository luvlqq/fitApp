import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MealsController } from './meals.controller';
import { MealsMicroserviceRepository } from './meals.repository';
import { MealsMicroserviceService } from './meals.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    RmqModule,
    PrismaModule,
  ],
  controllers: [MealsController],
  providers: [MealsMicroserviceService, MealsMicroserviceRepository],
})
export class MealsModule {}

import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsMicroserviceService } from './meals.service';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { MealsMicroserviceRepository } from './meals.repository';
import { PrismaModule } from '@app/db';

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

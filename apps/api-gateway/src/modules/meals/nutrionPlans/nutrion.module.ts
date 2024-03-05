import { Module } from '@nestjs/common';

import { NutritionGatewayController } from './nutrion.controller';
import { NutritionGatewayService } from './nutrion.service';

@Module({
  imports: [],
  controllers: [NutritionGatewayController],
  providers: [NutritionGatewayService],
})
export class NutritionGatewayModule {}

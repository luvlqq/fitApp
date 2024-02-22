import { Module } from '@nestjs/common';

import { NutritionGatewayController } from './nutrion.controller';
import { NutrionGatewayService } from './nutrion.service';

@Module({
  imports: [],
  controllers: [NutritionGatewayController],
  providers: [NutrionGatewayService],
})
export class NutrionGatewayModule {}

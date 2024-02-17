import { Module } from '@nestjs/common';

import { NutrionGatewayController } from './nutrion.controller';
import { NutrionGatewayService } from './nutrion.service';

@Module({
  imports: [],
  controllers: [NutrionGatewayController],
  providers: [NutrionGatewayService],
})
export class NutrionGatewayModule {}

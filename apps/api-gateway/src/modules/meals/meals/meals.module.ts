import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Module } from '@nestjs/common';

import { MealsGatewayController } from './meals.controller';
import { MealsGatewayService } from './meals.service';

@Module({
  imports: [RmqModule.register({ name: 'MEALS' })],
  controllers: [MealsGatewayController],
  providers: [MealsGatewayService],
  exports: [RmqModule],
})
export class MealsGatewayModule {}

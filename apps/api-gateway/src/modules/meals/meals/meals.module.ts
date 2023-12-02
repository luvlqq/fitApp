import { Module } from '@nestjs/common';
import { MealsGatewayController } from './meals.controller';
import { MealsGatewayService } from './meals.service';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

@Module({
  imports: [RmqModule.register({ name: 'MEALS' })],
  controllers: [MealsGatewayController],
  providers: [MealsGatewayService],
  exports: [RmqModule],
})
export class MealsGatewayModule {}

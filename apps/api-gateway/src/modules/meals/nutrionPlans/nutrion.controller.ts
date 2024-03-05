import { Body, Controller, Post } from '@nestjs/common';

import { NutritionGatewayService } from './nutrion.service';

@Controller('nutrion-plans')
export class NutritionGatewayController {
  constructor(private readonly nutrionService: NutritionGatewayService) {}

  @Post('get-plan-test')
  public async getPlan(@Body() text: string) {}
}

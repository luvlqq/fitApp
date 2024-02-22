import { Body, Controller, Post } from '@nestjs/common';

import { NutrionGatewayService } from './nutrion.service';

@Controller('nutrion-plans')
export class NutritionGatewayController {
  constructor(private readonly nutrionService: NutrionGatewayService) {}

  @Post('get-plan-test')
  public async getPlan(@Body() text: string) {}
}
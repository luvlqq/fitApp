import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';

import { GetCurrentUserId } from '../../auth/auth/decorators';
import { NutritionGatewayService } from './nutrion.service';

@ApiTags('Nutrition')
@Controller('nutrition-plans')
export class NutritionGatewayController {
  constructor(private readonly nutritionService: NutritionGatewayService) {}

  @Post('get-plan-test')
  @Throttle({ default: { limit: 2, ttl: 10000 } })
  public async getPlan(
    @GetCurrentUserId(ParseIntPipe) userId: number,
    @Body() text: string,
  ) {
    return null;
  }
}

import { Controller } from '@nestjs/common';
import { NutrionGatewayService } from './nutrion.service';

@Controller('nutrion-plans')
export class NutrionGatewayController {
  constructor(private readonly nutrionService: NutrionGatewayService) {}
}

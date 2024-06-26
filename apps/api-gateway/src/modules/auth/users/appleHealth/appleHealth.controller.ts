import { Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetCurrentUserId } from '../../auth/decorators';
import { AppleHealthGatewayService } from './appleHealth.service';

@ApiTags('Apple Health')
@Controller('appleHealth')
export class AppleHealthGatewayController {
  constructor(private readonly appleHealthService: AppleHealthGatewayService) {}

  @Post('create-user-data')
  public async createUserData(@GetCurrentUserId() userId: number, dto) {
    return this.appleHealthService.createUserData(userId, dto);
  }

  @Patch('update-user-data')
  public async updateUserData(@GetCurrentUserId() userId: number, dto) {
    return this.appleHealthService.updateUserData(userId, dto);
  }

  @Get('get-user-data')
  public async getUserData(@GetCurrentUserId() userId: number) {
    return this.appleHealthService.getUserData(userId);
  }
}

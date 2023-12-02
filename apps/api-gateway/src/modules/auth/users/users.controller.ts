import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { UsersGatewayService } from './users.service';
import { GetCurrentUserId } from '../auth/decorators';
import { ApiTags } from '@nestjs/swagger';
import { HealthDataDto } from './dto/healthdata.dto';
import { UpdateHealthData } from './dto/update.healthData.dto';

@ApiTags('Users')
@Controller('users')
export class UsersGatewayController {
  constructor(private readonly usersService: UsersGatewayService) {}

  @Get()
  public async getUserInfo(@GetCurrentUserId() userId: number) {
    return this.usersService.showUserInfo(userId);
  }

  @Post('health-data')
  public async addHealthData(
    @GetCurrentUserId() userId: number,
    @Body() dto: HealthDataDto,
  ) {
    return this.usersService.addHealthData(userId, dto);
  }

  @Post('update-data')
  public async updateHealthData(
    @GetCurrentUserId(ParseIntPipe) userId: number,
    @Body() dto: UpdateHealthData,
  ) {
    return this.usersService.updateHealthData(userId, dto);
  }

  @Post('add-workout-to-favorite')
  public async addWorkoutToFavourite(
    @GetCurrentUserId(ParseIntPipe) userId: number,
    @Body() workoutId: number,
  ) {
    return this.usersService.addWorkoutsToFavourite(userId, workoutId);
  }

  @Post('subscribe-to-workout')
  public async subscribeToWorkout(
    @GetCurrentUserId() userId: number,
    @Body('workoutId') workoutId: number,
  ) {
    return this.usersService.subscribeToWorkout(userId, +workoutId);
  }
}

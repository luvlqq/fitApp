import {
  CreateWorkoutsDto,
  UpdateWorkoutsDto,
} from '@app/contracts/dto/workouts.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';

import { GetCurrentUserId } from '../../auth/auth/decorators';
import { WorkoutsGatewayService } from './workouts.service';

@ApiTags('Workouts')
@Controller('workouts')
export class WorkoutsGatewayController {
  constructor(
    private readonly workoutsService: WorkoutsGatewayService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  @Get()
  public async getAllWorkouts() {
    const cachedData = await this.cacheService.get('allWorkouts');

    if (cachedData) {
      return cachedData;
    }

    const workouts = await this.workoutsService.findAllWorkouts();
    await this.cacheService.set('allWorkouts', workouts);
    return workouts;
  }

  @Post()
  public async createWorkout(@Body() dto: CreateWorkoutsDto) {
    return this.workoutsService.createWorkout(dto);
  }

  @Post('create-with-exercise')
  public async createWorkoutByExercises(@Body() dto: CreateWorkoutsDto) {
    console.log(dto.exerciseId);
    return this.workoutsService.createWorkoutByExercises(dto, dto.exerciseId);
  }

  @Post('start-workout')
  public async startWorkout(
    @GetCurrentUserId() userId: number,
    workoutId: number,
  ) {
    return null;
  }

  @Post('generate-workout-report-by-id')
  public async generateWorkoutReport(workoutId: number) {
    return this.workoutsService.generateWorkoutReport(workoutId);
  }

  @Get('get-all-workouts-reports')
  public async getAllUserWorkoutsReport(@GetCurrentUserId() userId: number) {
    return this.workoutsService.generateAllWorkoutsReport(userId);
  }

  @Patch(':id')
  public async updateWorkout(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWorkoutsDto,
  ) {
    return this.workoutsService.updateWorkout(id, dto);
  }

  @Delete(':id')
  public async deleteWorkout(@Param('id', ParseIntPipe) id: number) {
    return this.workoutsService.deleteWorkout(id);
  }
}

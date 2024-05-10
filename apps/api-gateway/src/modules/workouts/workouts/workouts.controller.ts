import { WorkoutResponse } from '@app/common/swagger/responses/workouts/workouts.response';
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
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
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

  @ApiResponse({
    status: 200,
    description: 'Get all workouts',
    type: WorkoutResponse,
    schema: {
      $ref: getSchemaPath(WorkoutResponse),
    },
  })
  @Get()
  public async getAllWorkouts() {
    return await this.workoutsService.findAllWorkouts();
  }

  @ApiOperation({ deprecated: true })
  @Post()
  public async createWorkout(@Body() dto: CreateWorkoutsDto) {
    return this.workoutsService.createWorkout(dto);
  }

  @ApiBody({
    type: CreateWorkoutsDto,
    schema: {
      $ref: getSchemaPath(CreateWorkoutsDto),
    },
  })
  @Post('create-with-exercise')
  public async createWorkoutByExercises(@Body() dto: CreateWorkoutsDto) {
    console.log(dto.exerciseIds);
    return this.workoutsService.createWorkoutByExercises(dto, dto.exerciseIds);
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

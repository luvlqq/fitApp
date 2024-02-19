import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetCurrentUserId } from '../../auth/auth/decorators';
import { CreateWorkoutsDto } from './dto/create.workouts.dto';
import { UpdateWorkoutsDto } from './dto/update.workouts.dto';
import { WorkoutsGatewayService } from './workouts.service';

@ApiTags('Workouts')
@Controller('workouts')
export class WorkoutsGatewayController {
  constructor(private readonly workoutsService: WorkoutsGatewayService) {}

  @Get()
  public async getAllWorkouts() {
    return this.workoutsService.findALlWorkouts();
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

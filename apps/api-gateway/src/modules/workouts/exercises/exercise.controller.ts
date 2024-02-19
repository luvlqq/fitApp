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

import { CreateExerciseDto } from './dto/craete.exercise.dto';
import { UpdateExerciseDto } from './dto/update.exercise.dto';
import { ExerciseGatewayService } from './exercise.service';

@ApiTags('Exercise')
@Controller('exercise')
export class ExerciseGatewayController {
  constructor(private readonly exerciseService: ExerciseGatewayService) {}

  @Get()
  public async getAllExercises() {
    return this.exerciseService.getAllExercises();
  }

  @Post('create')
  public async createExercise(@Body() dto: CreateExerciseDto) {
    return this.exerciseService.createExercise(dto);
  }

  @Patch(':id')
  public async updateExercise(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateExerciseDto,
  ) {
    return this.exerciseService.updateExercise(id, dto);
  }

  @Delete(':id')
  public async deleteExercise(@Param('id', ParseIntPipe) id: number) {
    return this.exerciseService.deleteExercise(id);
  }
}

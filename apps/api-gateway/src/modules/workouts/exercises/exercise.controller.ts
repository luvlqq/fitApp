import {
  CreateExerciseDto,
  UpdateExerciseDto,
} from '@app/contracts/dto/exercise.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

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
  @UseInterceptors(AnyFilesInterceptor())
  public async createExercise(
    @Body() dto: CreateExerciseDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const image = files.find((file) => file.fieldname === 'image');
    const video = files.find((file) => file.fieldname === 'video');
    return this.exerciseService.createExercise(dto, image, video);
  }

  @Post('create-local')
  public async createLocal(@Body() dto: CreateExerciseDto) {
    return this.exerciseService.createLocal(dto);
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

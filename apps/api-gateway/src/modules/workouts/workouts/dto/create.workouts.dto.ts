import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutsDto {
  @ApiProperty({ description: 'Workout name', nullable: false })
  @IsString()
  @IsNotEmpty()
  name: string;


  @ApiProperty({ description: 'Workout description', nullable: false })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Workout duration', nullable: false })
  @IsNotEmpty()
  duration: Date;

  @ApiProperty({ description: 'Workout time of exercise', nullable: false })
  @IsNotEmpty()
  timeOfExercise: Date;

  @ApiProperty({ description: "Workout exercies id's", nullable: false })
  @IsArray()
  exerciseId?: number[];
}

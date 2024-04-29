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
  duration: number;

  @ApiProperty({ description: "Workout exercises id's", nullable: false })
  @IsArray()
  exerciseId?: number[];
}

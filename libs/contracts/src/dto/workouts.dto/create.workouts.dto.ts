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

  @ApiProperty({ description: 'Workout video url', nullable: false })
  @IsNotEmpty()
  @IsString()
  videoUrl: string;

  @ApiProperty({ description: 'Workout image url', nullable: false })
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @ApiProperty({
    description: 'Array of exercise ids associated with the workout',
    nullable: false,
    type: Array(Number),
  })
  @IsArray()
  exerciseIds: number[];
}

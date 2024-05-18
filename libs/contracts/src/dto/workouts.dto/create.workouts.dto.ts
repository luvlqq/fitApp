import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
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
  @Transform(({ value }) => parseInt(value, 10))
  duration: number;

  @ApiProperty({ description: 'Workout video url', nullable: false })
  videoUrl?: string;

  @ApiProperty({ description: 'Workout image url', nullable: false })
  imageUrl?: string;

  @ApiProperty({
    description: 'Array of exercise ids associated with the workout',
    nullable: false,
    type: Array(Number),
  })
  @IsArray()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        return JSON.parse(value).map((id: string) => parseInt(id, 10));
      } catch (e) {
        return [];
      }
    }
    return value;
  })
  exerciseIds?: number[];
}

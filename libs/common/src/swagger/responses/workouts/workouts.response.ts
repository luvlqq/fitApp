import { ApiProperty } from '@nestjs/swagger';

interface Exercise {
  id: number;
  name: string;
  description: string;
  sets: string;
  video: string;
  image: string;
  duration: number;
  difficultyLevel: string;
  groupOfMuscles: string;
}

export class WorkoutResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  duration: number;

  @ApiProperty({ type: 'number', nullable: true })
  userId: number | null;

  @ApiProperty({ type: 'number', nullable: true })
  exerciseId: number | null;

  @ApiProperty({ type: [Object] })
  WorkoutToExercise: {
    id: number;
    workoutId: number;
    exerciseId: number;
    exercise: Exercise;
  }[];

  @ApiProperty({ type: 'number', nullable: true })
  user: number | null;
}

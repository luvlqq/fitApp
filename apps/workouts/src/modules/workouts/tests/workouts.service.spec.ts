import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutsService } from '../workout.service';
import { WorkoutsRepository } from '../workouts.repository';
import { PrismaModule } from '@app/db';
import { CreateWorkoutsDto } from 'apps/api-gateway/src/modules/workouts/workouts/dto/create.workouts.dto';

describe('Workouts service', () => {
  let service: WorkoutsService;
  let repository: WorkoutsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutsService, WorkoutsRepository],
      imports: [PrismaModule],
    }).compile();

    service = module.get<WorkoutsService>(WorkoutsService);
    repository = module.get<WorkoutsRepository>(WorkoutsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create workout', () => {
    it('craete a workout form repo', async () => {
      const dto: CreateWorkoutsDto = {
        name: 'Test workout',
        description: 'test desc',
        duration: new Date(),
        timeOfExercise: new Date(),
        exerciseId: [1],
      };

      const expectedWorkout = {
        id: 1,
        name: 'Test workout',
        description: 'test desc',
        duration: new Date(),
        timeOfExercise: new Date(),
        userId: 1,
      };

      jest
        .spyOn(repository, 'createWorkouts')
        .mockResolvedValue(expectedWorkout);

      const createdWorkout = await service.createWorkout(dto);
      expect(createdWorkout).toEqual(expectedWorkout);
    });
  });
});

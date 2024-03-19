import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { CreateWorkoutsDto } from '@app/contracts/dto/workouts.dto';
import { PrismaModule } from '@app/db';
import { Test, TestingModule } from '@nestjs/testing';

import { WorkoutsMicroserviceService } from '../workout.service';
import { WorkoutsRepository } from '../workouts.repository';

describe('Workouts service', () => {
  let service: WorkoutsMicroserviceService;
  let repository: WorkoutsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutsMicroserviceService, WorkoutsRepository],
      imports: [PrismaModule, WinstonLoggerModule],
    }).compile();

    service = module.get<WorkoutsMicroserviceService>(
      WorkoutsMicroserviceService,
    );
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
        duration: 12,
        exerciseId: [1],
      };

      const expectedWorkout = {
        id: 1,
        name: 'Test workout',
        description: 'test desc',
        duration: 12,
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

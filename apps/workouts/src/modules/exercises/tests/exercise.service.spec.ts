import { AuditService } from '@app/common/audit/audit.service';
import { WinstonLoggerModule } from '@app/common/log/logger.module';
import { CreateExerciseDto } from '@app/contracts/dto/exercise.dto';
import { PrismaModule } from '@app/db';
import { Test, TestingModule } from '@nestjs/testing';
import { DifficultyLevels, groupOfMusculesENUM } from '@prisma/client';

import { ExerciseRepository } from '../exercise.repository';
import { ExerciseMicroserviceService } from '../exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseMicroserviceService;
  let repository: ExerciseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExerciseMicroserviceService,
        ExerciseRepository,
        AuditService,
      ],
      imports: [PrismaModule, WinstonLoggerModule],
    }).compile();

    service = module.get<ExerciseMicroserviceService>(
      ExerciseMicroserviceService,
    );
    repository = module.get<ExerciseRepository>(ExerciseRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create exercise', () => {
    it('should call repository to create a correct exercise', async () => {
      const dto: CreateExerciseDto = {
        name: 'Test Exercise',
        description: 'Test Description',
        sets: 'Test Sets',
        video: 'Test Video',
        image: 'Test Image',
        duration: 123,
      };

      const expectedExercise = {
        id: 1,
        name: 'Test Exercise',
        description: 'Test Description',
        video: 'Test Video',
        image: 'Test Image',
        sets: 'Test Sets',
        duration: 123,
        workoutId: 1,
      };

      jest
        .spyOn(repository, 'createExercise')
        .mockResolvedValue(expectedExercise);

      const createdExercise = await service.createExercise(dto);
      expect(createdExercise).toEqual(expectedExercise);
    });
  });
});

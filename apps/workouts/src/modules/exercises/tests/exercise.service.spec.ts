import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseRepository } from '../exercise.repository';
import { ExerciseMicroserviceService } from '../exercise.service';
import { PrismaModule } from '@app/db';
import { CreateExerciseDto } from '../dto/craete.exercise.dto';
import { groupOfMusculesENUM } from '@prisma/client';
import { WinstonLoggerModule } from '@app/common/log/logger.module';

describe('ExerciseService', () => {
  let service: ExerciseMicroserviceService;
  let repository: ExerciseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseMicroserviceService, ExerciseRepository],
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
        video: 'Test Video',
        gropuOfMuscules: groupOfMusculesENUM.Back,
      };

      const expectedExercise = {
        id: 1,
        name: 'Test Exercise',
        description: 'Test Description',
        video: 'Test Video',
        workoutId: 1,
        gropuOfMuscules: groupOfMusculesENUM.Back,
      };

      jest
        .spyOn(repository, 'createExercise')
        .mockResolvedValue(expectedExercise);

      const createdExercise = await service.createExercise(dto);
      expect(createdExercise).toEqual(expectedExercise);
    });
  });
});

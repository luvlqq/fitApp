import { Test, TestingModule } from '@nestjs/testing';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';

describe('MealsController', () => {
  let mealsController: MealsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MealsController],
      providers: [MealsService],
    }).compile();

    mealsController = app.get<MealsController>(MealsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mealsController.getHello()).toBe('Hello World!');
    });
  });
});

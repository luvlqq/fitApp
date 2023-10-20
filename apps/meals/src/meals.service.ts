import { Injectable } from '@nestjs/common';

@Injectable()
export class MealsService {
  getHello(): string {
    return 'Hello World!';
  }
}

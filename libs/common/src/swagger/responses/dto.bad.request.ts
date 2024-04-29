import { ApiProperty } from '@nestjs/swagger';

import { BadRequestError } from './bad.request.swagger';

export class DtoBadRequest extends BadRequestError {
  @ApiProperty()
  error: string;
}

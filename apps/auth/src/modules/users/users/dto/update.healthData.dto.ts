import { PartialType } from '@nestjs/swagger';
import { HealthDataDto } from './healthdata.dto';

export class UpdateHealthData extends PartialType(HealthDataDto) {}

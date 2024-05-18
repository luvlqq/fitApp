import { AuditService } from '@app/common/audit/audit.service';
import { AwsService } from '@app/common/aws/aws.service';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ExerciseMicroserviceController } from './exercise.controller';
import { ExerciseRepository } from './exercise.repository';
import { ExerciseMicroserviceService } from './exercise.service';

@Module({
  imports: [
    PrismaModule,
    RmqModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [ExerciseMicroserviceController],
  providers: [
    ExerciseMicroserviceService,
    ExerciseRepository,
    AuditService,
    AwsService,
  ],
})
export class ExerciseMicroserviceModule {}

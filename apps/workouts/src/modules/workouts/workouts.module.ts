import { AuditService } from '@app/common/audit/audit.service';
import { AwsModule } from '@app/common/aws/aws.module';
import { AwsService } from '@app/common/aws/aws.service';
import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WorkoutsController } from './workout.controller';
import { WorkoutsMicroserviceService } from './workout.service';
import { WorkoutsRepository } from './workouts.repository';

@Module({
  imports: [
    PrismaModule,
    RmqModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    AwsModule,
  ],
  controllers: [WorkoutsController],
  providers: [
    WorkoutsRepository,
    WorkoutsMicroserviceService,
    AuditService,
    AwsService,
  ],
})
export class WorkoutsModule {}

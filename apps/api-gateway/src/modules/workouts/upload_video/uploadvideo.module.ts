import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { Module } from '@nestjs/common';

import { UploadVideoGatewayController } from './uploadvideo.controller';
import { UploadVideoGatewayService } from './uploadvideo.service';

@Module({
  imports: [RmqModule.register({ name: 'WORKOUTS' })],
  providers: [UploadVideoGatewayService],
  controllers: [UploadVideoGatewayController],
})
export class UploadVideoGatewayModule {}

import { Module } from '@nestjs/common';
import { UploadVideoGatewayService } from './uploadvideo.service';
import { UploadVideoGatewayController } from './uploadvideo.controller';
import { RmqModule } from '@app/common/rabbit/rabbit.module';

@Module({
  imports: [RmqModule.register({ name: 'WORKOUTS' })],
  providers: [UploadVideoGatewayService],
  controllers: [UploadVideoGatewayController],
})
export class UploadVideoGatewayModule {}

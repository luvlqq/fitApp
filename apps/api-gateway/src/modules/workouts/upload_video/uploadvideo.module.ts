import { Module } from '@nestjs/common';
import { UploadVideoGatewayService } from './uploadvideo.service';
import { UploadVideoGatewayController } from './uploadvideo.controller';

@Module({
  imports: [],
  providers: [UploadVideoGatewayService],
  controllers: [UploadVideoGatewayController],
})
export class UploadVideoGatewayModule {}

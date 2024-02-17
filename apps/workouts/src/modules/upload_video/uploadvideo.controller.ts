import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { UploadVideoMicroserviceService } from './uploadvideo.service';

@Controller()
export class UploadVideoMicroserviceController {
  constructor(private readonly uploadService: UploadVideoMicroserviceService) {}

  @MessagePattern('uploadVideo')
  public async uploadVideo(
    @Payload() id: number,
    @Payload() file: Express.Multer.File,
  ) {
    return this.uploadService.uploadVideo(id, file);
  }
}

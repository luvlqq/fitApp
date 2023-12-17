import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadVideoGatewayService } from './uploadvideo.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Upload')
@Controller('upload-video')
export class UploadVideoGatewayController {
  constructor(private readonly uploadService: UploadVideoGatewayService) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('file'))
  public async sendVideo(
    @Param('id') id: number,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 25000 }),
          new FileTypeValidator({ fileType: 'mp4/HEIC/gif' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<string> {
    return this.uploadService.uploadVideo(id, file);
  }
}

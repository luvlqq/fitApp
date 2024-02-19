import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleDriveModule } from 'nestjs-googledrive-upload';

import * as Config from './config.json';
import { FolderID } from './constants';
import { UploadVideoMicroserviceController } from './uploadvideo.controller';
import { UploadVideoRepository } from './uploadvideo.repository';
import { UploadVideoMicroserviceService } from './uploadvideo.service';

@Module({
  imports: [
    PrismaModule,
    RmqModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    GoogleDriveModule.register(Config, FolderID),
  ],
  controllers: [UploadVideoMicroserviceController],
  providers: [UploadVideoMicroserviceService, UploadVideoRepository],
  exports: [UploadVideoMicroserviceService],
})
export class UploadVideoMicroserviceModule {}

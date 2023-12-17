import { RmqModule } from '@app/common/rabbit/rabbit.module';
import { PrismaModule } from '@app/db';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UploadVideoMicroserviceController } from './uploadvideo.controller';
import { UploadVideoMicroserviceService } from './uploadvideo.service';
import { UploadVideoRepository } from './uploadvideo.repository';
import { GoogleDriveModule } from 'nestjs-googledrive-upload';
import * as Config from './config.json';
import { FolderID } from './constants';

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

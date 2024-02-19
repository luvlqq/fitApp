import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { GoogleDriveService } from 'nestjs-googledrive-upload';

import { UploadVideoRepository } from './uploadvideo.repository';

@Injectable()
export class UploadVideoMicroserviceService {
  constructor(
    private readonly repository: UploadVideoRepository,
    private readonly googleDrive: GoogleDriveService,
  ) {}

  public async uploadVideo(
    id: number,
    file: Express.Multer.File,
  ): Promise<Exercise> {
    try {
      const video = await this.googleDrive.uploadImage(file);
      return await this.repository.uploadVideoToExercise(id, video);
    } catch (e) {
      throw new Error(e);
    }
  }
}

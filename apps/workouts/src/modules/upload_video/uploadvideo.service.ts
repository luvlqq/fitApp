import { Injectable } from '@nestjs/common';
import { UploadVideoRepository } from './uploadvideo.repository';
import { GoogleDriveService } from 'nestjs-googledrive-upload';
import { Exercise } from '@prisma/client';

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

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UploadVideoGatewayService {
  constructor(@Inject('WORKOUTS') private workoutsClient: ClientProxy) {}

  public async uploadVideo(id: number, file: Express.Multer.File) {
    return await lastValueFrom(
      this.workoutsClient.send('uploadVideo', { id: id, file: file }),
    );
  }
}

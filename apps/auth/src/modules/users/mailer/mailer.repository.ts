import { PrismaService } from '@app/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async sendMail() {
    return 'Mail sent';
  }
}

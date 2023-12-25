import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MailerMicroserviceService {
  /**
   * Send email after user login in his account
   */
  public async sendLogInMail(userEmail: string): Promise<void> {
    console.log(userEmail + ' this user email has been login');
  }

  /**
   * Send weekly stats of each user every sunday's at 5 PM
   */
  @Cron('0 0 17 * * 7', {
    name: 'Weekly result',
    timeZone: 'Europe/Minsk',
  })
  public async sendWeeklyStat(
    userEmail: string,
    userId: number,
    mailText: string,
  ): Promise<void> {
    return null;
  }
}

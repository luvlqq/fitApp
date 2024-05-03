import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { render } from '@react-email/render';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';

import ResetPassword from './templates/ResetPasswordMail';
import WelcomeEmail from './templates/WelcomeMail';

@Injectable()
export class MailService {
  private nodemailerTransport: Mail;

  constructor(private readonly configService: ConfigService) {
    this.nodemailerTransport = createTransport({
      service: configService.get('EMAIL_SERVICE'),
      auth: {
        user: configService.get('EMAIL_USER'),
        pass: configService.get('EMAIL_PASSWORD'),
      },
    });
  }

  private generateEmail = (template) => {
    return render(template);
  };

  public async sendMail({ email, subject, template }) {
    const html = this.generateEmail(template);

    await this.nodemailerTransport.sendMail({
      to: email,
      subject,
      html,
    });
  }

  public async sendWelcomeMessage(email: string) {
    await this.sendMail({
      email: email,
      subject: `Welcome, ${email} !`,
      template: WelcomeEmail(),
    });
  }

  public async resetPassword(email: string, code: string) {
    await this.sendMail({
      email: email,
      subject: `Reset password`,
      template: ResetPassword(code),
    });
  }
}

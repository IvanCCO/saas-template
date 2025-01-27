import { LeaveCart } from '@/lib/email/leave-cart';
import { EmailGateway } from '../../../domain/communication/EmailGateway';
import { sendEmail } from '../sendEmail';

export class WelcomeEmail implements EmailGateway {
  async send(email: Email): Promise<void> {
    console.log('Start to send welcome email to user ' + email);
    await sendEmail({
      from: '<no-reply.domain>',
      to: email,
      subject: 'Welcome to our platform',
      react: LeaveCart(),
    });
  }
}

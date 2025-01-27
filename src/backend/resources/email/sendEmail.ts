import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
  from: string;
  to: Email;
  subject: string;
  react: JSX.Element;
}

export async function sendEmail({
  from,
  to,
  subject,
  react,
}: SendEmailParams): Promise<Response> {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to: to.getValue(),
      subject,
      react,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

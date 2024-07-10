import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is not set');
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const content = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.SENDER_EMAIL, // This must be verified in SendGrid
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    };

    console.log('Attempting to send email with content:', JSON.stringify(content, null, 2));

    const result = await sgMail.send(content);
    console.log('SendGrid response:', result);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Detailed error:', error);
    if (error.response) {
      console.error('Error response body:', JSON.stringify(error.response.body, null, 2));
    }
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const content = {
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.RECIPIENT_EMAIL, // Use the same email for 'from' and 'to'
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    };

    try {
      await sgMail.send(content);
      res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending message.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
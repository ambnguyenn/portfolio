import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // test
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

        const {firstName, lastName, email, message } = req.body;
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'ambernguyen50@gmail.com',
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: `
                You have a new contact form submission:
                
                First Name: ${firstName}
                Last Name: ${lastName}
                Email: ${email}
                Message: ${message}
          `,
        };

        try {
            await transporter.sendMail(mailOptions);
            
            res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'An error occurred while submitting the form' });
        } 
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }
}
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: this.configService.get<string>('EMAIL_USER'),
                pass: this.configService.get<string>('EMAIL_PASS'),
            },
        });
    }

    async sendContactFormEmail(formData: { name: string; email: string; message: string; demo: boolean }) {
        const recipientEmail = 'avi0110nash@gmail.com';
        const mailOptions = {
            from: 'avi0110nash@gmail.com', // Must match auth.user
            to: recipientEmail,
            subject: `New Contact Form Submission from ${formData.name}`,
            text: `
                Name: ${formData.name}
                Email: ${formData.email}
                Message: ${formData.message}
                Demo Requested: ${formData.demo ? 'Yes' : 'No'}
            `,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Email sent to ${recipientEmail}`);
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error(`Failed to send email: ${error.message}`);
        }
    }
}
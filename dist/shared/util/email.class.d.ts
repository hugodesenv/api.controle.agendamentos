import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { IEmailTranspoter } from '../interface/email-transporter.interface';
export declare class EmailClass {
    static getTransporter(parameter: IEmailTranspoter): Transporter<SMTPTransport.SentMessageInfo>;
    static getTransporterById(emailId: number): Promise<Transporter<SMTPTransport.SentMessageInfo>>;
}

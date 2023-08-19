import knex from 'knex';
import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import knexfile from '../../features/dabatase/knexfile';
import { IEmailTranspoter } from '../interface/email-transporter.interface';
const nodemailer = require('nodemailer');

export class EmailClass {
  static getTransporter(
    parameter: IEmailTranspoter,
  ): Transporter<SMTPTransport.SentMessageInfo> {
    return nodemailer.createTransport({
      host: parameter.host,
      port: parameter.port,
      secure: parameter.port === 465,
      auth: {
        user: parameter.email,
        pass: parameter.password,
      },
    });
  }

  static async getTransporterById(emailId: number) {
    const db = knex(knexfile);
    try {
      const [query] = await db
        .select(['email', 'password', 'host', 'port'])
        .from('email')
        .where('id', emailId);

      const parameters: IEmailTranspoter = {
        email: query['email'],
        host: query['host'],
        password: query['password'],
        port: query['port'],
      };

      const transporter = this.getTransporter(parameters);
      return transporter;
    } finally {
      db.destroy();
    }
  }
}

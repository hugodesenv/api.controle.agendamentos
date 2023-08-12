import * as nodemailer from 'nodemailer';

interface ISendEmailResult {
  success: boolean;
  message: string;
}

export class EmailUtils {

  Finalizar o envio do e-Mail...
  
  // passar as propriedades de configuraçao aqui
  // e as propriedades do to...from...message...body
  // via construtor...

  async sendEmail(): Promise<ISendEmailResult> {
    return {
      message: '',
      success: true,
    };
  }
}

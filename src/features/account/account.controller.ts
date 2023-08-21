import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EmailClass } from 'src/shared/email.class';
import { IEmailTranspoter } from 'src/shared/interface/email-transporter.interface';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { ForgotPasswordAccountDto } from './dto/forgot-password-account.dto';
import { LoginAccountDto } from './dto/login-account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: LoginAccountDto): Promise<{}> {
    let has_account = await this.accountService.tryLogin(dto);
    return has_account;
  }

  @Post()
  async create(@Body() dto: AccountDto): Promise<{}> {
    try {
      const success = await this.accountService.create(dto);
      return { success };
    } catch (e) {
      console.log(e);
      throw new HttpException({ message: e.detail }, HttpStatus.FORBIDDEN);
    }
  }

  @Patch()
  async update(@Body() dto: AccountDto) {
    try {
      let affected = await this.accountService.update(dto);
      return { affected };
    } catch (e) {
      throw new HttpException({ message: e.detail }, HttpStatus.FORBIDDEN);
    }
  }

  @Get('forgot-password')
  async forgotPassword(@Query() queryDto: ForgotPasswordAccountDto) {
    try {
      const [userData] = await this.accountService.findAllByUsername(
        queryDto.username,
      );

      if (userData === undefined) {
        throw new HttpException(
          { message: `Usuário ${queryDto.username} não encontrado!` },
          HttpStatus.BAD_REQUEST,
        );
      }

      const pinCode = Math.floor(Math.random() * 9000 + 1000);
      const html = `<!DOCTYPE html>`
        .concat(`<html>`)
        .concat(`<head>`)
        .concat(` <title>Skedol - Recuperação de senha</title>`)
        .concat(`</head>`)
        .concat(`<body>`)
        .concat(`<h2>Recuperação de senha</h2>`)
        .concat(`<p>Olá ${queryDto.username}, tudo bem?</p>`)
        .concat(`<p>Você não consegue acessar o sistema? Não se preocupe!`)
        .concat(`<p>Segue abaixo o código de recuperação:</p>`)
        .concat(`<h1><u>${pinCode}</u></h1>`)
        .concat(
          `<p>Caso não foi você quem solicitou, por gentileza desconsiderar este e-mail! :)</p>`,
        )
        .concat(`<p><b>Atenciosamente, equipe Skedol!</b></p>`)
        .concat(`</body>`)
        .concat(`</html>`);

      const configuration: IEmailTranspoter = {
        email: process.env.EMAIL_LOGIN,
        host: process.env.EMAIL_HOST,
        password: process.env.EMAIL_PASSWORD,
        port: parseInt(process.env.EMAIL_PORT),
      };

      const transpoter = EmailClass.getTransporter(configuration);
      const options = {
        from: process.env.EMAIL_LOGIN,
        to: userData.email,
        subject: 'Skedol - Esqueci minha senha',
        html: html,
      };

      const result = await transpoter.sendMail(options);

      if (result.accepted.length > 0) {
        return { message: 'E-mail de recuperação de enviado com sucesso!' };
      } else {
        throw new HttpException(
          { message: 'Erro ao enviar e-mail de recuperação.' },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

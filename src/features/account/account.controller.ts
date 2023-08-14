import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { LoginAccountDto } from './dto/login-account.dto';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { EmailUtils } from 'src/shared/utils/email.utils';
import { ForgotPasswordAccountDto } from './dto/forgot-password-account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: LoginAccountDto): Promise<{}> {
    let has_account = await this.accountService.tryLogin(dto);
    return has_account;
  }

  @Post('create')
  async create(@Body() dto: CreateAccountDto): Promise<{}> {
    try {
      let id = await this.accountService.create(dto);
      return { id };
    } catch (e) {
      throw new HttpException({ message: e.detail }, HttpStatus.FORBIDDEN);
    }
  }

  @Put('update')
  async update(@Body() dto: UpdateAccountDto) {
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
      const html = '<h1>Oi...te amo</h1>';
      const configuration: IEmailTranspoter = {
        email: process.env.EMAIL_LOGIN,
        host: process.env.EMAIL_HOST,
        password: process.env.EMAIL_PASSWORD,
        port: parseInt(process.env.EMAIL_PORT),
      };
      const transpoter = EmailUtils.getTransporter(configuration);
      const options = {
        from: process.env.EMAIL_LOGIN,
        to: queryDto.email,
        subject: 'Redefinição de senha',
        html: html,
      };

      return await transpoter.sendMail(options);
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

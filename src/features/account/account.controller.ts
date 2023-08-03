import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { LoginAccountDto } from './dto/login-account.dto';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { IUpdateResult } from './interface/update-result.interface';

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
      return {
        id,
        message:
          id > 0 ? 'Usuário cadastrado com sucesso!' : 'Falha ao cadastrar...',
      };
    } catch (error) {
      throw new HttpException(
        {
          detail: error.detail,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @Put('update')
  async update(@Body() dto: UpdateAccountDto) {
    try {
      let res: IUpdateResult = await this.accountService.update(dto);
      return res;
    } catch (e) {
      throw new HttpException(
        { message: e.detail, success: false } as IUpdateResult,
        HttpStatus.FORBIDDEN,
      );
    }
  }
}

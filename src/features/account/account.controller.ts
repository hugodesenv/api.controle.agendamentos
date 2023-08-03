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
}

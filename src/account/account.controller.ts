import { Body, Controller, Post } from '@nestjs/common';
import { LoginAccountDto } from './dto/login-account.dto';

@Controller('account')
export class AccountController {
  @Post('login')
  async login(@Body() loginAccountDto: LoginAccountDto): Promise<{}> {
    return "fazer o esquema de login aqui dentro...";
  }
}

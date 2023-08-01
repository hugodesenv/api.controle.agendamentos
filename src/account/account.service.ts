import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';

@Injectable()
export class AccountService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async tryLogin(dto: LoginAccountDto): Promise<boolean> {
    let query = await this.knex.select('id').from('account').where({
      username: dto.username,
      password: dto.password,
      active: true,
    });

    return query.length > 0;
  }
}

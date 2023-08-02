import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  private readonly TABLE_NAME = 'account';

  constructor(@InjectKnex() private readonly knex: Knex) {}

  async tryLogin(dto: LoginAccountDto): Promise<boolean> {
    let query = await this.knex
      .select('id')
      .from(this.TABLE_NAME)
      .where({
        ...dto,
        active: true,
      });

    return query.length > 0;
  }

  async create(dto: CreateAccountDto): Promise<number> {
    let res: number = await this.knex(this.TABLE_NAME)
      .insert(dto)
      .returning('id');

    return res[0]['id'];
  }
}

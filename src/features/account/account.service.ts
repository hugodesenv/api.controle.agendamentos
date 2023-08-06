import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

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
      .insert({
        username: dto.username,
        password: dto.password,
        active: dto.active,
        fk_company: dto.fk_company,
      })
      .returning('id');

    return res[0]['id'];
  }

  async update(dto: UpdateAccountDto): Promise<number> {
    let rows_affected = await this.knex(this.TABLE_NAME)
      .update({
        password: dto.password,
        active: dto.active,
      })
      .where({ id: dto.id });
    return rows_affected;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async tryLogin(dto: LoginAccountDto): Promise<any> {
    let [res] = await this.knex
      .select([
        'account.id',
        'account.username',
        'account.email',
        'account.fk_company',
        'company.social_name',
      ])
      .from('account')
      .innerJoin('company', 'company.id', '=', 'account.fk_company')
      .where({
        'account.username': dto.username,
        'account.password': dto.password,
        'company.active': true,
      });

    return { data: res };
  }

  async create(dto: CreateAccountDto): Promise<number> {
    let res: number = await this.knex('account')
      .insert({
        username: dto.username,
        password: dto.password,
        active: dto.active,
        fk_company: dto.fk_company,
        email: dto.email,
      })
      .returning('id');

    return res[0]['id'];
  }

  async update(dto: UpdateAccountDto): Promise<number> {
    let rows_affected = await this.knex('account')
      .update({
        password: dto.password,
        active: dto.active,
        email: dto.email,
      })
      .where({ id: dto.id });
    return rows_affected;
  }
}

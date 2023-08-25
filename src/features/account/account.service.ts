import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { AccountDto } from './dto/account.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { AccountInterface } from './interface/account.interface';

@Injectable()
export class AccountService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async tryLogin(dto: LoginAccountDto): Promise<any> {
    let [res] = await this.knex
      .select([
        'account.name',
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

    return {
      name: res['name'],
      username: res['username'],
      email: res['email'],
      company: {
        id: res['fk_company'],
        social_name: res['social_name'],
      },
    };
  }

  async create(dto: AccountDto): Promise<any> {
    const res = await this.knex('account').insert({
      name: dto.name,
      username: dto.username,
      password: dto.password,
      active: dto.active,
      fk_company: dto.fk_company,
      email: dto.email,
    });

    return { rows_affected: res['rowCount'] ?? 0 };
  }

  async update(dto: AccountDto): Promise<number> {
    let rows_affected = await this.knex('account')
      .update({
        name: dto.email,
        password: dto.password,
        active: dto.active,
        email: dto.email,
      })
      .where({ username: dto.username });
    return rows_affected;
  }

  async findAllByUsername(username: string): Promise<AccountInterface[]> {
    const account: AccountInterface[] = await this.knex('account')
      .select('*')
      .where('username', username);
    return account;
  }
}

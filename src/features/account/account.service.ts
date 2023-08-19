import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
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

    return { data: res };
  }

  async create(dto: CreateAccountDto): Promise<any> {
    const [res] = await this.knex('account').insert(dto).returning('id');
    return { res };
  }

  async update(dto: UpdateAccountDto): Promise<number> {
    let rows_affected = await this.knex('account')
      .update({
        password: dto.password,
        active: dto.active,
        email: dto.email,
        name: dto.email,
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

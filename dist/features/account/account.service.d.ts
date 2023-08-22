import { Knex } from 'nestjs-knex';
import { AccountDto } from './dto/account.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { AccountInterface } from './interface/account.interface';
export declare class AccountService {
    private readonly knex;
    constructor(knex: Knex);
    tryLogin(dto: LoginAccountDto): Promise<any>;
    create(dto: AccountDto): Promise<any>;
    update(dto: AccountDto): Promise<number>;
    findAllByUsername(username: string): Promise<AccountInterface[]>;
}

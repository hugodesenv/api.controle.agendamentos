import { Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountInterface } from './interface/account.interface';
export declare class AccountService {
    private readonly knex;
    constructor(knex: Knex);
    tryLogin(dto: LoginAccountDto): Promise<any>;
    create(dto: CreateAccountDto): Promise<boolean>;
    update(dto: UpdateAccountDto): Promise<number>;
    findAllByUsername(username: string): Promise<AccountInterface[]>;
}

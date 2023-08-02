import { Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
export declare class AccountService {
    private readonly knex;
    private readonly TABLE_NAME;
    constructor(knex: Knex);
    tryLogin(dto: LoginAccountDto): Promise<boolean>;
    create(dto: CreateAccountDto): Promise<number>;
}

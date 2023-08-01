import { Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
export declare class AccountService {
    private readonly knex;
    constructor(knex: Knex);
    tryLogin(dto: LoginAccountDto): Promise<boolean>;
}

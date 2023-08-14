import { Knex } from 'nestjs-knex';
import { LoginAccountDto } from './dto/login-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountService {
    private readonly knex;
    constructor(knex: Knex);
    tryLogin(dto: LoginAccountDto): Promise<any>;
    create(dto: CreateAccountDto): Promise<number>;
    update(dto: UpdateAccountDto): Promise<number>;
}

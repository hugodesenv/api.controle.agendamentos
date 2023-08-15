import { Knex } from 'nestjs-knex';
import { CreateEmailDto } from './dto/create-email.dto';
export declare class EmailService {
    private readonly knex;
    constructor(knex: Knex);
    create(dto: CreateEmailDto): Promise<any>;
}

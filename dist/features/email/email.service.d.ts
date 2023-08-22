import { Knex } from 'nestjs-knex';
import { EmailDto } from './dto/email.dto';
export declare class EmailService {
    private readonly knex;
    constructor(knex: Knex);
    create(emailDto: EmailDto): Promise<any>;
}

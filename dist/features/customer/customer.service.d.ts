import { Knex } from 'knex';
import { CustomerDto } from './dto/customer.dto';
export declare class CustomerService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(companyId: string): Promise<any>;
    create(dto: CustomerDto): Promise<string>;
    remove(id: string): Promise<any>;
}

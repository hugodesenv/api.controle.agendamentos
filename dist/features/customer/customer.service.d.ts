import { Knex } from 'knex';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(companyId: string): Promise<any>;
    create(dto: CreateCustomerDto): Promise<string>;
    remove(id: string): Promise<any>;
}

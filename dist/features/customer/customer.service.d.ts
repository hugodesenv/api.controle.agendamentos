import { Knex } from 'knex';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(companyID: number): Promise<any>;
    create(dto: CreateCustomerDto): Promise<number>;
    remove(id: number): Promise<number>;
}

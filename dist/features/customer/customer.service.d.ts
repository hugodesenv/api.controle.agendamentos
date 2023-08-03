import { ICustomer } from './interface/customer.interface';
import { Knex } from 'knex';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerService {
    private readonly knex;
    private TABLE_NAME;
    constructor(knex: Knex);
    findAll(): Promise<ICustomer[]>;
    create(customer: CreateCustomerDto): Promise<number>;
}

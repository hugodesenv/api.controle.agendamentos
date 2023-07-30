import { Customer } from './interface/customer.interface';
import { Knex } from 'knex';
export declare class CustomerService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(): Promise<Customer[]>;
}

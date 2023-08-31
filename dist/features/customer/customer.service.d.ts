import { Knex } from 'knex';
import { CustomerDto } from './dto/customer.dto';
import { CustomerInterface } from 'src/interface/db/customer.interface';
export declare class CustomerService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(companyId: string): Promise<CustomerInterface[]>;
    create(customer: CustomerDto): Promise<string>;
    remove(id: string): Promise<any>;
}

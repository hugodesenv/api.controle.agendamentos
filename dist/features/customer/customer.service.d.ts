import { Knex } from 'knex';
import { CustomerDto } from './dto/customer.dto';
import { CustomerInterface } from 'src/features/customer/interface/customer.interface';
export declare class CustomerService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(companyId: string): Promise<CustomerInterface[]>;
    create(customer: CustomerDto): Promise<string>;
    private buildInsert;
    remove(id: string): Promise<any>;
    update(customer: CustomerDto, id: string): Promise<void>;
    private buildUpdate;
}

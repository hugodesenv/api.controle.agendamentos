import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { ICustomer } from './interface/customer.interface';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<{}>;
    findAll(): Promise<ICustomer[]>;
}
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<any>;
    findAll(companyId: string): Promise<any>;
    remove(id: string): Promise<any>;
}

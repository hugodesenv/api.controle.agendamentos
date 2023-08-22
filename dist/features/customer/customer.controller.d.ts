import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    create(customerDto: CustomerDto): Promise<any>;
    findAll(companyId: string): Promise<any>;
    remove(id: string): Promise<any>;
}

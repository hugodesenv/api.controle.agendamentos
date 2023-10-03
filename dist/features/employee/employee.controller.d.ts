import { EmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(employeeDto: EmployeeDto): Promise<any>;
    update(id: string, employeeDto: EmployeeDto): Promise<any>;
    delete(id: string): Promise<any>;
    findAll(company_id: string): Promise<any>;
}

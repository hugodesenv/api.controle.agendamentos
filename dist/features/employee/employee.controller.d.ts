import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<any>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<any>;
    delete(id: string): Promise<any>;
}

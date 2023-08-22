import { Knex } from 'nestjs-knex';
import { EmployeeDto } from './dto/employee.dto';
export declare class EmployeeService {
    private readonly knex;
    constructor(knex: Knex);
    create(employeeDto: EmployeeDto): Promise<any>;
    update(id: string, employeeDto: EmployeeDto): Promise<any>;
    delete(id: string): Promise<any>;
}

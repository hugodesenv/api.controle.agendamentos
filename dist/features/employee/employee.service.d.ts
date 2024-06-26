import { Knex } from 'nestjs-knex';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeInterface } from './interface/employee.interface';
import { EmployeeFindAllInterface } from './interface/employee.findAll.interface';
export declare class EmployeeService {
    private readonly knex;
    constructor(knex: Knex);
    create(employeeDto: EmployeeDto): Promise<any>;
    update(id: string, employeeDto: EmployeeDto): Promise<any>;
    delete(id: string): Promise<any>;
    findAll(companyId: string, filter: EmployeeFindAllInterface): Promise<EmployeeInterface[]>;
    private buildQuery;
}

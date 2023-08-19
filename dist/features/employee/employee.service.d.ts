import { Knex } from 'nestjs-knex';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeService {
    private readonly knex;
    constructor(knex: Knex);
    create(createEmployeeDto: CreateEmployeeDto): Promise<any>;
    update(id: string, updateAccountDto: UpdateEmployeeDto): Promise<any>;
    delete(id: string): Promise<any>;
}

import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { EmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(employeeDto: EmployeeDto): Promise<any> {
    const [res] = await this.knex('employee')
      .insert({
        name: employeeDto.name,
        active: employeeDto.active,
        fk_company: employeeDto.fk_company,
      })
      .returning('id');
    return res;
  }

  async update(id: string, employeeDto: EmployeeDto): Promise<any> {
    const rows = await this.knex('employee')
      .update({
        name: employeeDto.name,
        active: employeeDto.active,
      })
      .where({ id: id });

    return { rows_affected: rows };
  }

  async delete(id: string): Promise<any> {
    const rows = await this.knex('employee').where('id', id).del();
    return { rows_affected: rows };
  }
}

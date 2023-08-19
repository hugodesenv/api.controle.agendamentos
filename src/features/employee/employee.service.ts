import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<any> {
    const [res] = await this.knex('employee')
      .insert({
        name: createEmployeeDto.name,
        active: createEmployeeDto.active,
        fk_company: createEmployeeDto.fk_company,
      })
      .returning('id');
    return res;
  }

  async update(id: string, updateAccountDto: UpdateEmployeeDto): Promise<any> {
    const rows = await this.knex('employee')
      .update({
        name: updateAccountDto.name,
        active: updateAccountDto.active,
      })
      .where({ id: id });

    return { rows_affected: rows };
  }

  async delete(id: string): Promise<any> {
    const rows = await this.knex('employee').where('id', id).del();
    return { rows_affected: rows };
  }
}

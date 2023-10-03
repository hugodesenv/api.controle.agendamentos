import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeInterface } from './interface/employee.interface';

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

  async findAll(companyId: string) {
    const sql = this.knex('employee as a')
      .select('a.id', 'a.name', 'a.active', 'a.fk_company', 'b.social_name as company_name')
      .innerJoin('company as b', 'a.fk_company', '=', 'b.id')
      .where('a.fk_company', companyId)
      .orderBy('a.name');

    const query = await sql;

    const res: EmployeeInterface[] = query.map((value) => {
      return {
        id: value['id'],
        name: value['name'],
        active: value['active'],
        company: {
          id: value['fk_company'],
          social_name: value['company_name'],
        },
      };
    });

    return res;
  }
}

import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { CustomerDto } from './dto/customer.dto';
import { CustomerInterface } from 'src/features/customer/interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(companyId: string): Promise<CustomerInterface[]> {
    const query = await this.knex('customer').select('*').where('fk_company', companyId).orderBy('name');

    const res: CustomerInterface[] = query.map((row) => {
      return {
        id: row.id,
        name: row.name,
        cellphone: row.cellphone,
        email: row.email,
        company: {
          id: row.fk_company,
        },
      };
    });

    return res;
  }

  async create(customer: CustomerDto): Promise<string> {
    const [res] = await this.buildInsert(customer);
    return res;
  }

  private buildInsert(customer: CustomerDto) {
    return this.knex('customer')
      .insert({
        fk_company: customer.fk_company,
        name: customer.name,
        email: customer.email,
        cellphone: customer.cellphone,
      })
      .returning('id');
  }

  async remove(id: string): Promise<any> {
    try {
      const rowsAffected = await this.knex('customer').delete().where('id', id);
      return { rows_affected: rowsAffected };
    } catch (error) {
      throw error;
    }
  }

  async update(customer: CustomerDto, id: string) {
    try {
      const sql = this.buildUpdate(customer, id);
      const query = await sql;
      const success = query > 0;
      return {
        success,
        message: success === true ? 'Alteracao realizada!' : 'Nao foi possivel alterar...',
      };
    } catch (error) {
      throw error;
    }
  }

  private buildUpdate(customer: CustomerDto, id: string) {
    let data = {
      cellphone: customer.cellphone,
      email: customer.email,
      name: customer.name,
    };

    return this.knex('customer').update(data).where({ id: id });
  }
}

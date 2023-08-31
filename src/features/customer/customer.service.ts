import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { CustomerDto } from './dto/customer.dto';
import { CustomerInterface } from 'src/interface/db/customer.interface';

@Injectable()
export class CustomerService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(companyId: string): Promise<CustomerInterface[]> {
    const query = await this.knex('customer').select('*').where('fk_company', companyId);

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
    const [res] = await this.knex('customer').insert({
      fk_company: customer.fk_company,
      name: customer.name,
      email: customer.email,
      cellphone: customer.cellphone,

    }).returning('id');
    return res;
  }

  async remove(id: string): Promise<any> {
    try {
      const rowsAffected = await this.knex('customer').delete().where('id', id);
      return { rows_affected: rowsAffected };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

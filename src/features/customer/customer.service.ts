import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(companyId: string): Promise<any> {
    let res = await this.knex('customer')
      .select('*')
      .where('fk_company', companyId);

    console.log('customer.service.findAll', res);

    return res;
  }

  async create(dto: CustomerDto): Promise<string> {
    const [res] = await this.knex('customer').insert(dto).returning('id');
    return res;
  }

  async remove(id: string): Promise<any> {
    const res = await this.knex('customer').delete().where('id', id);
    return { rows_affected: res };
  }
}

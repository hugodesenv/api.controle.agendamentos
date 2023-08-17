import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(companyID: number): Promise<any> {
    let res = await this.knex('customer')
      .select('*')
      .where('fk_company', companyID);
    return res;
  }

  async create(dto: CreateCustomerDto): Promise<number> {
    let res = await this.knex('customer').insert(dto).returning('id');
    return res[0]['id'];
  }

  async remove(id: number) {
    const res = await this.knex('customer').delete().where('id', id);
    console.log('customer.service.remove', res);
    return res;
  }
}

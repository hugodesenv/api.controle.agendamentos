import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

@Injectable()
export class CustomerService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(): Promise<Customer[]> {
    var res = await this.knex
      .select('id', 'name', 'cellphone', 'email')
      .from('customer');

    return res;
  }
}

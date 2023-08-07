import { Injectable } from '@nestjs/common';
import { ICustomer } from './interface/customer.interface';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private TABLE_NAME = 'customer';

  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(): Promise<ICustomer[]> {
    let res = await this.knex
      .select('id', 'name', 'cellphone', 'email')
      .from(this.TABLE_NAME);

    return res;
  }

  async create(dto: CreateCustomerDto): Promise<number> {
    let res = await this.knex(this.TABLE_NAME).insert(dto).returning('id');
    return res[0]['id'];
  }
}
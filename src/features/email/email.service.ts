import { Injectable } from '@nestjs/common';
import knex from 'knex';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateEmailDto } from './dto/create-email.dto';

@Injectable()
export class EmailService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(createEmailDto: CreateEmailDto): Promise<any> {
    const [res] = await this.knex('email')
      .insert(createEmailDto)
      .returning('id');

    return res;
  }
}

import { Injectable } from '@nestjs/common';
import knex from 'knex';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateEmailDto } from './dto/create-email.dto';

@Injectable()
export class EmailService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateEmailDto): Promise<any> {
    const [res] = await this.knex('email')
      .insert({
        fk_company: dto.fk_company,
        email: dto.email,
        password: dto.password,
        host: dto.host,
        port: dto.port,
      })
      .returning('id');

    return { res };
  }
}

import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { EmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(emailDto: EmailDto): Promise<any> {
    const [res] = await this.knex('email')
      .insert({
        fk_company: emailDto.fk_company,
        email: emailDto.email,
        password: emailDto.password,
        host: emailDto.host,
        port: emailDto.port,
      })
      .returning('id');

    return res;
  }
}

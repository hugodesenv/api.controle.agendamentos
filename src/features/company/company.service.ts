import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class CompanyService {
  private readonly TABLE_NAME = 'company';

  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateCompanyDto): Promise<number> {
    let query = await this.knex(this.TABLE_NAME).insert(dto).returning('id');
    return query[0]['id'];
  }

  async update(dto: UpdateCompanyDto): Promise<number> {
    let rows_affected = await this.knex(this.TABLE_NAME)
      .update(dto)
      .where({ id: dto.id });

    return rows_affected;
  }
}

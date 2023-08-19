import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<number> {
    const [res] = await this.knex('company')
      .insert({
        social_name: createCompanyDto.social_name,
        active: createCompanyDto.active,
      })
      .returning('id');
    return res;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<any> {
    const res = await this.knex('company')
      .update({
        social_name: updateCompanyDto.social_name,
        active: updateCompanyDto.active,
      })
      .where({ id: id });

    return { rows_affected: res };
  }

  async delete(id: string): Promise<any> {
    const res = await this.knex('company').where('id', id).del();
    return { rows_affected: res };
  }
}

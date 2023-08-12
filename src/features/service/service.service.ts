import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateServiceDto): Promise<number> {
    let serviceQuery = await this.knex('service')
      .insert({
        description: dto.description,
        active: dto.active,
        service_minutes: dto.service_minutes,
        fk_company: dto.fk_company,
      })
      .returning('id');

    return serviceQuery[0]['id'];
  }
}

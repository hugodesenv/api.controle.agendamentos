import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  private readonly TABLE_NAME = 'service';

  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateServiceDto): Promise<number> {
    let serviceQuery = await this.knex(this.TABLE_NAME)
      .insert(dto)
      .returning('id');

    return serviceQuery[0]['id'];
  }
}

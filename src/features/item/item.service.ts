import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class ItemService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(itemDto: CreateItemDto): Promise<number> {
    const [query] = await this.knex('item').insert(itemDto).returning('id');
    return query;
  }
}

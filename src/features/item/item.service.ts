import { Injectable } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class ItemService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(itemDto: ItemDto): Promise<number> {
    const [query] = await this.knex('item')
      .insert({
        fk_company: itemDto.fk_company,
        description: itemDto.description,
        service_minutes: itemDto.service_minutes,
        active: itemDto.active,
        type: itemDto.type,
      })
      .returning('id');
    return query;
  }
}

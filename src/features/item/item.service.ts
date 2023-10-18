import { ItemFindDto } from './dto/item-find.dto';
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

  async findAll(filter: ItemFindDto): Promise<{}> {
    const sql = this.buildQuery(filter);
    const query = await sql;
    return query;
  }

  private buildQuery(filter: ItemFindDto) {
    let res = this.knex('item as a')
      .select('a.id', 'a.description', 'a.service_minutes', 'a.active', 'a.type')
      .where('a.fk_company', filter.company_id);

    filter.active != undefined && res.andWhere('a.active', filter.active);

    return res;
  }
}

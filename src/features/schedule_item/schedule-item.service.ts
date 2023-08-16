import { Injectable } from '@nestjs/common';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class ScheduleItemService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(item: CreateScheduleItemDto): Promise<any> {
    const [res] = await this.knex('schedule_item').insert(item).returning('id');
    return res['id'];
  }
}

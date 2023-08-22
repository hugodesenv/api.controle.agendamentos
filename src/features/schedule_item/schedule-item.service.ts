import { Injectable } from '@nestjs/common';
import { Knex } from 'nestjs-knex';
import { ScheduleItemDto } from './dto/schedule-item.dto';

@Injectable()
export class ScheduleItemService {
  async create(
    trx: Knex,
    createScheduleItemDto: ScheduleItemDto,
  ): Promise<any> {
    const [res] = await trx('schedule_item')
      .insert({
        fk_schedule: createScheduleItemDto.fk_schedule,
        fk_item: createScheduleItemDto.fk_item,
        service_minutes: createScheduleItemDto.service_minutes,
        price: createScheduleItemDto.price,
      })
      .returning('id');

    return res;
  }
}

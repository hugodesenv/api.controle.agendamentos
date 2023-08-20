import { Injectable } from '@nestjs/common';
import { Knex } from 'nestjs-knex';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';

@Injectable()
export class ScheduleItemService {
  async create(
    trx: Knex,
    createScheduleItemDto: CreateScheduleItemDto,
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

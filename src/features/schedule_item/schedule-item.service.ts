import { Injectable } from '@nestjs/common';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class ScheduleItemService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(createScheduleItemDto: CreateScheduleItemDto): Promise<any> {
    const [res] = await this.knex('schedule_item')
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

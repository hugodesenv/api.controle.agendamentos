import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import _ from 'lodash';
import { CreateScheduleItemDto } from '../schedule_item/dto/create-schedule-item.dto';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
    private readonly itemService: ScheduleItemService,
  ) {}

  //@@@@@@implementar transaction
  async create(createAccountDto: CreateScheduleDto): Promise<any> {
    const [scheduleInsertResult] = await this.knex('schedule')
      .insert({
        fk_employee: createAccountDto.fk_employee,
        fk_customer: createAccountDto.fk_customer,
        schedule_date: createAccountDto.schedule_date,
      })
      .returning('id');

    const scheduleID = scheduleInsertResult['id'];

    var idsScheduleItem = [];
    await Promise.all(
      createAccountDto.items.map(
        async (scheduleItemDto: CreateScheduleItemDto) => {
          const objectScheduleItem = {
            ...scheduleItemDto,
            fk_schedule: scheduleID,
          };
          const id = await this.itemService.create(objectScheduleItem);
          idsScheduleItem.push(id);
        },
      ),
    );

    return {
      schedule_id: scheduleID,
      items_id: idsScheduleItem,
    };
  }
}

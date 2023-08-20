import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleItemDto } from '../schedule_item/dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from '../schedule_item/dto/update-schedule-item.dto';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
    private readonly itemService: ScheduleItemService,
  ) {}

  async create(createAccountDto: CreateScheduleDto): Promise<any> {
    const trx = await this.knex.transaction();
    try {
      const [res] = await trx('schedule')
        .insert({
          fk_employee: createAccountDto.fk_employee,
          fk_customer: createAccountDto.fk_customer,
          schedule_date: createAccountDto.schedule_date,
        })
        .returning('id');

      await Promise.all([
        this._proccessItemInsert(res.id, createAccountDto.items, trx),
      ]);

      await trx.commit();

      return { message: 'Operação realizada com sucesso!' };
    } catch (error) {
      trx.rollback();
      throw error;
    }
  }

  async update(scheduleID: string, updateSheduleDto: UpdateScheduleDto) {
    const trx = await this.knex.transaction();
    try {
      await trx('schedule')
        .update({
          fk_customer: updateSheduleDto.fk_customer,
          schedule_date: updateSheduleDto.schedule_date,
        })
        .where(scheduleID);

      const items = updateSheduleDto.items;
      await Promise.all([
        this._proccessItemInsert(scheduleID, items.insert, trx),
        this._proccessItemUpdate(items.update, trx),
        this._proccessItemDelete(items.delete, trx),
      ]);

      trx.commit();
    } catch (error) {
      trx.rollback();
    }
  }

  private async _proccessItemInsert(
    scheduleID: string,
    items: CreateScheduleItemDto[],
    trx: Knex,
  ) {
    items.map(async (data: CreateScheduleItemDto) => {
      const item = { ...data, fk_schedule: scheduleID };
      try {
        await this.itemService.create(trx, item);
      } catch (error) {
        console.log('EXCEPTION');
      }
    });
  }

  private async _proccessItemUpdate(items: UpdateScheduleItemDto[], trx: Knex) {
    items.map(async (data: UpdateScheduleItemDto) => {
      console.log('scheduke.service.ts proccessItemUpdate: ' + data);
    });
  }

  private async _proccessItemDelete(ids: string[], trx: Knex) {}
}

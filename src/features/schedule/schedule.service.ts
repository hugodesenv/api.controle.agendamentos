import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ScheduleItemDto } from '../schedule_item/dto/schedule-item.dto';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';
import { ScheduleDto } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@InjectKnex() private readonly knex: Knex, private readonly itemService: ScheduleItemService) {}

  async create(scheduleDto: ScheduleDto): Promise<any> {
    const trx = await this.knex.transaction();
    try {
      const [res] = await trx('schedule')
        .insert({
          fk_employee: scheduleDto.fk_employee,
          fk_customer: scheduleDto.fk_customer,
          schedule_date: scheduleDto.schedule_date,
        })
        .returning('id');

      await this._proccessItemInsert(res.id, scheduleDto.items.insert, trx);

      await trx.commit();

      return { message: 'Operação realizada com sucesso!' };
    } catch (e) {
      trx.rollback();
      throw e;
    }
  }

  async update(scheduleID: string, updateSheduleDto: ScheduleDto) {
    const trx = await this.knex.transaction();
    try {
      await trx('schedule')
        .update({
          fk_customer: updateSheduleDto.fk_customer,
          schedule_date: updateSheduleDto.schedule_date,
        })
        .where(scheduleID);

      const items = updateSheduleDto.items;
      await Promise.all([this._proccessItemInsert(scheduleID, items.insert, trx), this._proccessItemUpdate(items.update, trx), this._proccessItemDelete(items.delete, trx)]);

      console.log('schedule.service.update.before commit');
      trx.commit();
    } catch (error) {
      console.log('schedule.service.update.rollback', error);
      trx.rollback();
    }
  }

  private async _proccessItemInsert(scheduleID: string, items: ScheduleItemDto[], trx: Knex) {
    await Promise.all(
      items.map(async (data: ScheduleItemDto) => {
        const item = { ...data, fk_schedule: scheduleID };
        try {
          await this.itemService.create(trx, item);
        } catch (error) {
          throw error;
        }
      }),
    );
  }

  private async _proccessItemUpdate(items: ScheduleItemDto[], trx: Knex) {
    await Promise.all(
      items.map(async (data: ScheduleItemDto) => {
        try {
        } catch (error) {
          console.log('schedule.service.proccessitemupdate', error);
        }
      }),
    );
  }

  private async _proccessItemDelete(ids: string[], trx: Knex) {}
}

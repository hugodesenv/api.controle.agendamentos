import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ScheduleItemDto } from '../schedule_item/dto/schedule-item.dto';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';
import { ScheduleDto } from './dto/schedule.dto';
import { ScheduleInterface } from './interface/schedule.interface';

@Injectable()
export class ScheduleService {
  constructor(@InjectKnex() private readonly knex: Knex, private readonly itemService: ScheduleItemService) {}

  async create(scheduleDto: ScheduleDto): Promise<any> {
    const trx = await this.knex.transaction();
    try {
      const sql = this.buildInsert(trx, scheduleDto);
      const [res] = await sql;

      await this._proccessItemInsert(res.id, scheduleDto.items?.insert, trx);

      await trx.commit();

      return { message: 'Operação realizada com sucesso!' };
    } catch (e) {
      trx.rollback();
      console.log({ error: e });
      throw e;
    }
  }

  private buildInsert(trx: any, data: ScheduleDto) {
    return trx('schedule')
      .insert({
        fk_employee: data.fk_employee,
        fk_customer: data.fk_customer,
        schedule_date: data.schedule_date,
        situation: data.situation,
      })
      .returning('id');
  }

  async update(scheduleID: string, updateSheduleDto: ScheduleDto) {
    const trx = await this.knex.transaction();
    try {
      await this.buildUpdate(trx, updateSheduleDto, scheduleID);

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

  private buildUpdate(trx: any, dto: ScheduleDto, scheduleId: string) {
    return trx('schedule')
      .update({
        fk_customer: dto.fk_customer,
        schedule_date: dto.schedule_date,
        situation: dto.situation,
      })
      .where(scheduleId);
  }

  async findAll(filters: any) {
    const sql = this.buildQuery(filters);
    const query = await sql;
    return query.map((data) => this.mapToScheduleInterface(data));
  }

  private mapToScheduleInterface(queryResult) {
    const output: ScheduleInterface = {
      id: queryResult.id,
      schedule_date: queryResult.schedule_date,
      total_minutes: queryResult.total_minutes,
      total_price: queryResult.total_price,
      situation: queryResult.situation,
      employee: { id: queryResult.employee_id, name: queryResult.employee_name },
      customer: {
        id: queryResult.customer_id,
        name: queryResult.customer_name,
      },
    };
    return output;
  }

  private buildQuery(filters) {
    return this.knex('schedule as a')
      .select(
        'a.id',
        'b.id as customer_id',
        'b.name as customer_name',
        'a.schedule_date',
        'a.total_minutes',
        'a.total_price',
        'a.situation',
        'a.date_changed',
        'c.id as employee_id',
        'c.name as employee_name',
      )
      .innerJoin('customer as b', 'a.fk_customer', '=', 'b.id')
      .innerJoin('employee as c', 'a.fk_employee', '=', 'c.id');
  }

  private async _proccessItemInsert(scheduleID: string, items: ScheduleItemDto[], trx: Knex) {
    if (items) {
      await Promise.all(
        items.map(async (data: ScheduleItemDto) => {
          const item = { ...data, fk_schedule: scheduleID };
          await this.itemService.create(trx, item);
        }),
      );
    }
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

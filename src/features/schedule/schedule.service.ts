import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ScheduleServiceService } from '../schedule_service/schedule-service.service';
import { CreateScheduleServiceDto } from '../schedule_service/dto/create-schedule-service.dto';

@Injectable()
export class ScheduleService {
  private readonly TABLE_NAME = 'schedule';

  constructor(
    @InjectKnex() private readonly knex: Knex,
    private readonly scheduleService: ScheduleServiceService,
  ) {}

  async create(dto: CreateScheduleDto): Promise<number> {
    let scheduleQuery = await this.knex(this.TABLE_NAME)
      .insert({
        fk_account: dto.fk_account,
        fk_customer: dto.fk_customer,
        schedule_date: dto.schedule_date,
      })
      .returning('id');

    let scheduleID = scheduleQuery[0]['id'];

    for await (const data of dto.services) {
      let service = { ...data, fk_schedule: scheduleID };
      await this.scheduleService.create(service);
    }

    return scheduleID;
  }
}

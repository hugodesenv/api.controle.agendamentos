import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleServiceDto } from './dto/create-schedule-service.dto';

@Injectable()
export class ScheduleServiceService {
  private readonly TABLE_NAME = 'schedule_service';

  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateScheduleServiceDto): Promise<number> {
    let query = await this.knex(this.TABLE_NAME)
      .insert({
        fk_schedule: dto.fk_schedule,
        fk_service: dto.fk_service,
        service_minutes: dto.service_minutes,
      })
      .returning('id');

    return query[0]['id'];
  }
}

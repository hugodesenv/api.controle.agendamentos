import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleServiceDto } from './dto/create-schedule-service.dto';

@Injectable()
export class ScheduleServiceService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateScheduleServiceDto): Promise<number> {
    const [res] = await this.knex('schedule_service')
      .insert(dto)
      .returning('id');

    return res['id'];
  }
}

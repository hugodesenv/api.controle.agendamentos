import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleServiceDto } from './dto/create-schedule-service.dto';

@Injectable()
export class ScheduleServiceService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(dto: CreateScheduleServiceDto): Promise<number> {
    const [id] = await this.knex('schedule_service')
      .insert({
        fk_schedule: dto.fk_schedule,
        fk_service: dto.fk_service,
        service_minutes: dto.service_minutes,
      })
      .returning('id');
      
    return id;
  }
}

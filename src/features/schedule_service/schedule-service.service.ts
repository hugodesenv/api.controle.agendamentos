import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class ScheduleServiceService {
  constructor(@InjectKnex() knex: Knex) {}

  async create(): Promise<string> {
    return 'Salve';
  }
}

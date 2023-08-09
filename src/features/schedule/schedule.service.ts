import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { CreateScheduleServiceDto } from '../schedule_service/dto/create-schedule-service.dto';
import _ from 'lodash';
import { ScheduleServiceService } from '../schedule_service/schedule-service.service';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectKnex() private readonly knex: Knex,
    private readonly scheduleService: ScheduleServiceService,
  ) {}

  //@@@@@@implementar transaction
  async create(createAccountDto: CreateScheduleDto): Promise<any> {
    const [scheduleInsertResult] = await this.knex('schedule')
      .insert({
        fk_account: createAccountDto.fk_account,
        fk_customer: createAccountDto.fk_customer,
        schedule_date: createAccountDto.schedule_date,
      })
      .returning('id');

    const scheduleID = scheduleInsertResult['id'];

    var idsScheduleService = [];
    await Promise.all(
      createAccountDto.services.map(
        async (scheduleServiceDto: CreateScheduleServiceDto) => {
          let objectScheduleService = {
            ...scheduleServiceDto,
            fk_schedule: scheduleID,
          };
          const id = await this.scheduleService.create(objectScheduleService);
          idsScheduleService.push(id);
        },
      ),
    );

    return {
      scheduleID: scheduleID,
      scheduleServiceID: idsScheduleService,
    };
  }
}

import { Knex } from 'nestjs-knex';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ScheduleServiceService } from '../schedule_service/schedule-service.service';
export declare class ScheduleService {
    private readonly knex;
    private readonly scheduleService;
    constructor(knex: Knex, scheduleService: ScheduleServiceService);
    create(createAccountDto: CreateScheduleDto): Promise<any>;
}

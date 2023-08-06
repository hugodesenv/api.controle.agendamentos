import { Knex } from 'nestjs-knex';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ScheduleServiceService } from '../schedule_service/schedule-service.service';
export declare class ScheduleService {
    private readonly knex;
    private readonly scheduleService;
    private readonly TABLE_NAME;
    constructor(knex: Knex, scheduleService: ScheduleServiceService);
    create(dto: CreateScheduleDto): Promise<number>;
}

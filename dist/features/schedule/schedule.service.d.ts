import { Knex } from 'nestjs-knex';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';
export declare class ScheduleService {
    private readonly knex;
    private readonly itemService;
    constructor(knex: Knex, itemService: ScheduleItemService);
    create(createAccountDto: CreateScheduleDto): Promise<any>;
}

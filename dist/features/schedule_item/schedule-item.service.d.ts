import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
import { Knex } from 'nestjs-knex';
export declare class ScheduleItemService {
    private readonly knex;
    constructor(knex: Knex);
    create(item: CreateScheduleItemDto): Promise<any>;
}

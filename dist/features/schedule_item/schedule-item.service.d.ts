import { Knex } from 'nestjs-knex';
import { CreateScheduleItemDto } from './dto/create-schedule-item.dto';
export declare class ScheduleItemService {
    create(trx: Knex, createScheduleItemDto: CreateScheduleItemDto): Promise<any>;
}

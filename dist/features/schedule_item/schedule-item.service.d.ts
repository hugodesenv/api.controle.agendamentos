import { Knex } from 'nestjs-knex';
import { ScheduleItemDto } from './dto/schedule-item.dto';
export declare class ScheduleItemService {
    create(trx: Knex, createScheduleItemDto: ScheduleItemDto): Promise<any>;
}

import { Knex } from 'nestjs-knex';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';
import { ScheduleDto } from './dto/schedule.dto';
import { ScheduleInterface } from './interface/schedule.interface';
export declare class ScheduleService {
    private readonly knex;
    private readonly itemService;
    constructor(knex: Knex, itemService: ScheduleItemService);
    create(scheduleDto: ScheduleDto): Promise<any>;
    update(scheduleID: string, updateSheduleDto: ScheduleDto): Promise<void>;
    findAll(filters: any): Promise<ScheduleInterface[]>;
    private mapToScheduleInterface;
    private buildQuery;
    private _proccessItemInsert;
    private _proccessItemUpdate;
    private _proccessItemDelete;
}

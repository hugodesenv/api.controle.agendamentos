import { Knex } from 'nestjs-knex';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class ScheduleService {
    private readonly knex;
    private readonly itemService;
    constructor(knex: Knex, itemService: ScheduleItemService);
    create(createAccountDto: CreateScheduleDto): Promise<any>;
    update(scheduleID: string, updateSheduleDto: UpdateScheduleDto): Promise<void>;
    private _proccessItemInsert;
    private _proccessItemUpdate;
    private _proccessItemDelete;
}

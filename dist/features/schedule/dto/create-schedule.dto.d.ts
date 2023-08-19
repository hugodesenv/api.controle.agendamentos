import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
import { BaseScheduleDto } from './base-schedule.dto';
export declare class CreateScheduleDto extends BaseScheduleDto {
    fk_employee: string;
    items: CreateScheduleItemDto[];
}

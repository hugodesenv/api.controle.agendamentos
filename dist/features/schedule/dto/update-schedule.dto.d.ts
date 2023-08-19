import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from 'src/features/schedule_item/dto/update-schedule-item.dto';
import { BaseScheduleDto } from './base-schedule.dto';
export declare class UpdateScheduleDto extends BaseScheduleDto {
    items: {
        insert: CreateScheduleItemDto[];
        update: UpdateScheduleItemDto[];
        delete: string[];
    };
}

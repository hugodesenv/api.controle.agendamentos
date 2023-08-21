import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from 'src/features/schedule_item/dto/update-schedule-item.dto';
export declare class ScheduleDto {
    id: string;
    fk_customer: string;
    schedule_date: Date;
    fk_employee: string;
    items: {
        insert: CreateScheduleItemDto[];
        update: UpdateScheduleItemDto[];
        delete: string[];
    };
}

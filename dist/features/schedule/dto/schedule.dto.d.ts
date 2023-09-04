import { ScheduleItemDto } from 'src/features/schedule_item/dto/schedule-item.dto';
export declare class ScheduleDto {
    action: string;
    fk_customer: string;
    schedule_date: Date;
    fk_employee: string;
    items: {
        insert: ScheduleItemDto[];
        update: ScheduleItemDto[];
        delete: string[];
    };
}

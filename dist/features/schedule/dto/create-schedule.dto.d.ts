import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
export declare class CreateScheduleDto {
    fk_employee: string;
    fk_customer: string;
    schedule_date: Date;
    items: CreateScheduleItemDto[];
}

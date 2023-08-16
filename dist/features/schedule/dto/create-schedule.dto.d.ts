import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
export declare class CreateScheduleDto {
    fk_account: string;
    fk_customer: number;
    schedule_date: Date;
    items: CreateScheduleItemDto[];
}

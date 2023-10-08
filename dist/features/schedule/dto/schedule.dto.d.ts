import { ScheduleItemDto } from 'src/features/schedule_item/dto/schedule-item.dto';
import { ScheduleSituationEnum } from '../enum/schedule.situation.enum';
export declare class ScheduleDto {
    action: string;
    fk_customer: string;
    schedule_date: Date;
    fk_employee: string;
    situation: ScheduleSituationEnum;
    items: {
        insert: ScheduleItemDto[];
        update: ScheduleItemDto[];
        delete: string[];
    };
}

import { CreateScheduleServiceDto } from 'src/features/schedule_service/dto/create-schedule-service.dto';
export declare class CreateScheduleDto {
    fk_account: number;
    fk_customer: number;
    schedule_date: Date;
    services: CreateScheduleServiceDto[];
}

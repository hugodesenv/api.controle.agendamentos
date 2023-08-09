import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateScheduleServiceDto } from 'src/features/schedule_service/dto/create-schedule-service.dto';

export class CreateScheduleDto {
  @IsNumber()
  fk_account: number;

  @IsNumber()
  fk_customer: number;

  @IsNotEmpty()
  schedule_date: Date;

  services: CreateScheduleServiceDto[];
}

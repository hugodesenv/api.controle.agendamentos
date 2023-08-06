import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateScheduleServiceDto } from 'src/features/schedule_service/dto/create-schedule-service.dto';

export class CreateScheduleDto {
  @IsNumber()
  fk_account: number;

  @IsNumber()
  fk_customer: number;

  @IsDateString()
  schedule_date: Date;

  @IsNotEmpty()
  services: CreateScheduleServiceDto[];
}

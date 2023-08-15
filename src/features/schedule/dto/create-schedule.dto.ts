import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateScheduleServiceDto } from 'src/features/schedule_service/dto/create-schedule-service.dto';

export class CreateScheduleDto {
  @IsNotEmpty()
  fk_account: string;

  @IsNumber()
  fk_customer: number;

  @IsNotEmpty()
  schedule_date: Date;

  services: CreateScheduleServiceDto[];
}

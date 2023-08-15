import { IsNumber } from 'class-validator';

export class CreateScheduleServiceDto {
  @IsNumber()
  fk_schedule: number;

  @IsNumber()
  fk_service: number;

  @IsNumber()
  service_minutes: number;

  @IsNumber()
  price: number;
}

import { IsDateString, IsISO8601, IsNumber, IsTimeZone } from 'class-validator';

export class CreateScheduleServiceDto {
  @IsNumber()
  fk_schedule: number;

  @IsNumber()
  fk_service: number;

  @IsNumber()
  service_minutes: number;
}

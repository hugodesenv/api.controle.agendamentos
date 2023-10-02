import { IsInt, IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';

export class ScheduleItemDto {
  id: string;

  @IsInt()
  service_minutes: number;

  @IsNumber()
  price: number;

  @IsNotEmpty()
  fk_schedule: string;

  @IsNotEmpty()
  fk_item: string;
}

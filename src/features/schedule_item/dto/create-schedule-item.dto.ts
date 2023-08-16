import { IsInt, IsNumber } from 'class-validator';

export class CreateScheduleItemDto {
  @IsInt()
  fk_schedule: number;

  @IsInt()
  fk_item: number;

  @IsInt()
  service_minutes: number;

  @IsNumber()
  price: number;
}

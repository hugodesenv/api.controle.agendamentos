import { IsInt, IsNumber } from 'class-validator';

export class BaseScheduleItemDto {
  @IsInt()
  service_minutes: number;

  @IsNumber()
  price: number;
}

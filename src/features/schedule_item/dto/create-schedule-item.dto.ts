import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateScheduleItemDto {
  @IsNotEmpty()
  fk_schedule: string;

  @IsNotEmpty()
  fk_item: string;

  @IsInt()
  service_minutes: number;

  @IsNumber()
  price: number;
}

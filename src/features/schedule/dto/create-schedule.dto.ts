import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';

export class CreateScheduleDto {
  @IsNotEmpty()
  fk_account: string;

  @IsNumber()
  fk_customer: number;

  @IsNotEmpty()
  schedule_date: Date;

  items: CreateScheduleItemDto[];
}

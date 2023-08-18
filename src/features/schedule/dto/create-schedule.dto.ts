import { IsNotEmpty } from 'class-validator';
import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';

export class CreateScheduleDto {
  @IsNotEmpty()
  fk_employee: string;

  @IsNotEmpty()
  fk_customer: string;

  @IsNotEmpty()
  schedule_date: Date;

  items: CreateScheduleItemDto[];
}

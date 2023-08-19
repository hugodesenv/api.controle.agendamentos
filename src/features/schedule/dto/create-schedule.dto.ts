import { IsNotEmpty } from 'class-validator';
import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
import { BaseScheduleDto } from './base-schedule.dto';

export class CreateScheduleDto extends BaseScheduleDto {
  @IsNotEmpty()
  fk_employee: string;

  @IsNotEmpty()
  items: CreateScheduleItemDto[];
}

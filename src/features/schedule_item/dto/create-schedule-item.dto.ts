import { IsNotEmpty } from 'class-validator';
import { BaseScheduleItemDto } from './base-schedule-item.dto';

export class CreateScheduleItemDto extends BaseScheduleItemDto {
  @IsNotEmpty()
  fk_schedule: string;

  @IsNotEmpty()
  fk_item: string;
}

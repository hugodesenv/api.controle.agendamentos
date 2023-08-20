import { IsNotEmpty } from 'class-validator';
import { BaseScheduleItemDto } from './base-schedule-item.dto';

export class UpdateScheduleItemDto extends BaseScheduleItemDto {
  @IsNotEmpty()
  id: string;
}

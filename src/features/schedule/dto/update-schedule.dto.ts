import { IsNotEmpty } from 'class-validator';
import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from 'src/features/schedule_item/dto/update-schedule-item.dto';
import { BaseScheduleDto } from './base-schedule.dto';

export class UpdateScheduleDto extends BaseScheduleDto {
  @IsNotEmpty()
  items: {
    insert: CreateScheduleItemDto[];
    update: UpdateScheduleItemDto[];
    delete: string[] /** I receive the ids to remove */;
  };
}

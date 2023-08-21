import { IsNotEmpty, ValidateIf, IsEmpty } from 'class-validator';
import { CreateScheduleItemDto } from 'src/features/schedule_item/dto/create-schedule-item.dto';
import { UpdateScheduleItemDto } from 'src/features/schedule_item/dto/update-schedule-item.dto';

export class ScheduleDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  fk_customer: string;

  @IsNotEmpty()
  schedule_date: Date;

  @ValidateIf(o => o.id.IsEmpty())
  @IsNotEmpty()
  fk_employee: string;

  @IsNotEmpty()
  items: {
    insert: CreateScheduleItemDto[];
    update: UpdateScheduleItemDto[];
    delete: string[] /** I receive the ids to remove */;
  };
}

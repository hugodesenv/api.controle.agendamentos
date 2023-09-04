import { IsNotEmpty, ValidateIf, IsEmpty } from 'class-validator';
import { ScheduleItemDto } from 'src/features/schedule_item/dto/schedule-item.dto';
import { DB_ACTION } from 'src/shared/constants.class';

export class ScheduleDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  fk_customer: string;

  @IsNotEmpty()
  schedule_date: Date;

  @ValidateIf((o) => o.action === DB_ACTION.insert)
  @IsNotEmpty()
  fk_employee: string;

  @IsNotEmpty()
  items: {
    insert: ScheduleItemDto[];
    update: ScheduleItemDto[];
    delete: string[] /** I receive the ids to remove */;
  };
}

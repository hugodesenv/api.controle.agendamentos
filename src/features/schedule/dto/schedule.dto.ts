import { IsNotEmpty, ValidateIf, IsEmpty } from 'class-validator';
import { ScheduleItemDto } from 'src/features/schedule_item/dto/schedule-item.dto';

export class ScheduleDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  fk_customer: string;

  @IsNotEmpty()
  schedule_date: Date;

  @ValidateIf((o) => o.id.IsEmpty())
  @IsNotEmpty()
  fk_employee: string;

  @IsNotEmpty()
  items: {
    insert: ScheduleItemDto[];
    update: ScheduleItemDto[];
    delete: string[] /** I receive the ids to remove */;
  };
}

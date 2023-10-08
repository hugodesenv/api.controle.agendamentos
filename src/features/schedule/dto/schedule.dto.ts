import { IsNotEmpty, ValidateIf, IsEmpty, IsEnum } from 'class-validator';
import { ScheduleItemDto } from 'src/features/schedule_item/dto/schedule-item.dto';
import { ScheduleSituationEnum } from '../enum/schedule.situation.enum';
import { DatabaseActionEnum } from 'src/features/dabatase/enum/dabatase.action.enum';

export class ScheduleDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  fk_customer: string;

  @IsNotEmpty()
  schedule_date: Date;

  @ValidateIf((o) => o.action === DatabaseActionEnum.insert)
  @IsNotEmpty()
  fk_employee: string;

  @IsEnum(ScheduleSituationEnum)
  situation: ScheduleSituationEnum;

  @IsNotEmpty()
  items: {
    insert: ScheduleItemDto[];
    update: ScheduleItemDto[];
    delete: string[] /** I receive the ids to remove */;
  };
}

import { IsEnum, IsInt, IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';
import { DatabaseActionEnum } from 'src/features/dabatase/enum/dabatase.action.enum';

export class ScheduleItemDto {
  @IsEnum(DatabaseActionEnum)
  action: string;

  @IsInt()
  service_minutes: number;

  @IsNumber()
  price: number;

  @ValidateIf((o) => o.action === DatabaseActionEnum.insert)
  @IsNotEmpty()
  fk_schedule: string;

  @ValidateIf((o) => o.action === DatabaseActionEnum.insert)
  @IsNotEmpty()
  fk_item: string;
}

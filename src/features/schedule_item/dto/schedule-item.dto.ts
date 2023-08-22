import { IsInt, IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';
import { DB_ACTION } from 'src/shared/constants.class';

export class ScheduleItemDto {
  @IsNotEmpty()
  action: string;

  @IsInt()
  service_minutes: number;

  @IsNumber()
  price: number;

  @ValidateIf((o) => o.action === DB_ACTION.insert)
  @IsNotEmpty()
  fk_schedule: string;

  @ValidateIf((o) => o.action === DB_ACTION.insert)
  @IsNotEmpty()
  fk_item: string;
}

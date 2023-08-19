import { IsNotEmpty } from 'class-validator';

export class BaseScheduleDto {
  @IsNotEmpty()
  fk_customer: string;

  @IsNotEmpty()
  schedule_date: Date;
}

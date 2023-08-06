import {
  IsDateString,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
} from 'class-validator';

export class CreateScheduleDto {
  @IsNumber()
  fk_account: number;

  @IsNumber()
  fk_customer: number;

  @IsDateString()
  schedule_date: Date;

  @IsNotEmpty()
  services: CreateScheduleDto[];
}

import {
  IsBoolean,
  IsDateString,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsTimeZone,
} from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  description: string;

  @IsNumber()
  service_minutes: number;

  @IsBoolean()
  active: boolean;
}

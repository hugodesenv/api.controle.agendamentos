import { IsBoolean, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  fk_company: number;

  @IsNotEmpty()
  description: string;

  @IsInt()
  service_minutes: number;

  @IsBoolean()
  active: boolean;
}

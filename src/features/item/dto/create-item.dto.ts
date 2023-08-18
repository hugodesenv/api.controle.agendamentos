import {
  IsBoolean,
  IsEmpty,
  IsInt,
  IsNotEmpty
} from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  fk_company: string;

  @IsNotEmpty()
  description: string;

  @IsInt()
  service_minutes: number;

  @IsBoolean()
  active: boolean;

  @IsEmpty()
  type: string;
}

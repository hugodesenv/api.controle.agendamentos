import {
  IsAlpha,
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  Length,
} from 'class-validator';

export class BaseAccountDto {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  active: boolean;
}

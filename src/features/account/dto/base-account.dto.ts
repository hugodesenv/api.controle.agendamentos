import {
  IsAlpha,
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  Length,
} from 'class-validator';

export class BaseAccountDto {
  @IsNotEmpty()
  @Length(4, 20)
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  active: boolean;

  @IsNumber()
  fk_company: number;
}

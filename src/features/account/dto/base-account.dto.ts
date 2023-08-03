import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber } from 'class-validator';

export class BaseAccountDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  active: boolean;

  @IsNumber()
  fk_company: number;
}

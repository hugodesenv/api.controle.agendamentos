import { IsEmail, IsNotEmpty } from 'class-validator';

export class BaseAccountDto {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  active: boolean;

  @IsEmail()
  email: string;
}

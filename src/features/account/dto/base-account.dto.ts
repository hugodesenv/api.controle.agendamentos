import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class BaseAccountDto {
  @IsNotEmpty()
  @Length(4, 45)
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  active: boolean;

  @IsEmail()
  email: string;
}

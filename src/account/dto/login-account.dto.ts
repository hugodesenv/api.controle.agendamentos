import { IsNotEmpty } from 'class-validator';

export class LoginAccountDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

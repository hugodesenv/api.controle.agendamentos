import { IsEmail, IsNotEmpty, Length, ValidateIf } from 'class-validator';
import { DB_ACTION } from 'src/shared/constants.class';

export class AccountDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  name: string;

  @ValidateIf((o) => o.action === DB_ACTION.insert)
  @IsNotEmpty()
  fk_company: string;

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

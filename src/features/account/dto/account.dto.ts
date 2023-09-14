import { IsEmail, IsEnum, IsNotEmpty, Length, ValidateIf } from 'class-validator';
import { DatabaseActionEnum } from 'src/features/dabatase/enum/dabatase.action.enum';

export class AccountDto {
  @IsEnum(DatabaseActionEnum)
  action: string;

  @IsNotEmpty()
  name: string;

  @ValidateIf((o) => o.action === DatabaseActionEnum.insert)
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

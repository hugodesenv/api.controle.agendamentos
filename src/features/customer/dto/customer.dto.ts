import { Optional } from '@nestjs/common';
import { IsEmail, IsEnum, IsNotEmpty, ValidateIf } from 'class-validator';
import { DatabaseActionEnum } from 'src/features/dabatase/enum/dabatase.action.enum';

export class CustomerDto {
  @IsEnum(DatabaseActionEnum)
  action: string;

  @IsNotEmpty()
  name: string;

  @Optional()
  cellphone: string;

  @IsEmail()
  email: string;

  @ValidateIf((value) => value.action == DatabaseActionEnum.insert)
  @IsNotEmpty()
  fk_company: string;
}

import { Optional } from '@nestjs/common';
import { Allow, IsDefined, IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsNotEmptyObject, IsPhoneNumber, ValidateIf } from 'class-validator';
import { DatabaseActionEnum } from 'src/features/dabatase/enum/dabatase.action.enum';

export class CustomerDto {
  @IsEnum(DatabaseActionEnum)
  action: string;

  @IsNotEmpty()
  name: string;

  @IsDefined()
  cellphone: string;

  @IsEmail()
  email: string;

  @ValidateIf((value) => value.action == DatabaseActionEnum.insert)
  @IsNotEmpty()
  fk_company: string;
}

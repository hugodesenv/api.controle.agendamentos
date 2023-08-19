import { Optional } from '@nestjs/common';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  @Optional()
  cellphone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  fk_company: string;
}

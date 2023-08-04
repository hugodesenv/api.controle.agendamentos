import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  cellphone: string;

  @IsEmail()
  email: string;

  @IsNumber()
  fk_company: number;
}

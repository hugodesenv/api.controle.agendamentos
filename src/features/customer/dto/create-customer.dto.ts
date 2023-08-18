import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string;

  cellphone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  fk_company: string;
}

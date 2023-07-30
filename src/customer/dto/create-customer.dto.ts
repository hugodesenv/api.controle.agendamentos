import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  cellphone: string;
}

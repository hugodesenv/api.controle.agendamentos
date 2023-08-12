import { IsNotEmpty, IsNumber, isNotEmpty } from 'class-validator';

export class CreateEmailDto {
  @IsNumber()
  fk_company: number;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  host: string;

  @IsNumber()
  port: number;
}

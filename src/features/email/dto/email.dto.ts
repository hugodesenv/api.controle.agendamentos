import { IsNotEmpty, IsNumber } from 'class-validator';

export class EmailDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  fk_company: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  host: string;

  @IsNumber()
  port: number;
}

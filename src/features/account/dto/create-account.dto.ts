import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { BaseAccountDto } from './base-account.dto';

export class CreateAccountDto extends BaseAccountDto {
  @IsNumber()
  fk_company: number;
}

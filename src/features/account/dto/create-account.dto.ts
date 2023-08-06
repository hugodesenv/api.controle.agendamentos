import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { BaseAccountDto } from './base-account.dto';

export class CreateAccountDto extends BaseAccountDto {
  @IsNotEmpty()
  @Length(4, 20)
  username: string;

  @IsNumber()
  fk_company: number;
}

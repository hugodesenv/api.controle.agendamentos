import { IsNotEmpty } from 'class-validator';
import { BaseAccountDto } from './base-account.dto';

export class CreateAccountDto extends BaseAccountDto {
  @IsNotEmpty()
  fk_company: string;
}

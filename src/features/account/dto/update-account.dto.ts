import { IsNotEmpty, IsNumber } from 'class-validator';
import { BaseAccountDto } from './base-account.dto';

export class UpdateAccountDto extends BaseAccountDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}

import { IsNotEmpty, IsNumber } from 'class-validator';
import { BaseCompanyDto } from './base-company.dto';

export class UpdateCompanyDto extends BaseCompanyDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}

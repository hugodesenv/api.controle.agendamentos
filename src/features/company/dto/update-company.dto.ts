import { IsNotEmpty } from 'class-validator';
import { BaseCompanyDto } from './base-company.dto';

export class UpdateCompanyDto extends BaseCompanyDto {
  @IsNotEmpty()
  id: number;
}

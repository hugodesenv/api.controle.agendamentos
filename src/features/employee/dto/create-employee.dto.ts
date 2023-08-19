import { IsBoolean, IsNotEmpty } from 'class-validator';
import { BaseEmployeeDto } from './base-employee.dto';

export class CreateEmployeeDto extends BaseEmployeeDto {
  @IsNotEmpty()
  fk_company: string;
}

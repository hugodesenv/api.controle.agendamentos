import { IsBoolean, IsNotEmpty, ValidateIf } from 'class-validator';
import { DB_ACTION } from 'src/shared/constants.class';

export class EmployeeDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  name: string;

  @IsBoolean()
  active: boolean;

  @ValidateIf((o) => o.action === DB_ACTION.insert)
  @IsNotEmpty()
  fk_company: string;
}

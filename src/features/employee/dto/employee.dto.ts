import { IsBoolean, IsEnum, IsNotEmpty, ValidateIf } from 'class-validator';
import { DatabaseActionEnum } from 'src/features/dabatase/enum/dabatase.action.enum';

export class EmployeeDto {
  @IsEnum(DatabaseActionEnum)
  action: string;

  @IsNotEmpty()
  name: string;

  @IsBoolean()
  active: boolean;

  @ValidateIf((o) => o.action === DatabaseActionEnum.insert)
  @IsNotEmpty()
  fk_company: string;
}

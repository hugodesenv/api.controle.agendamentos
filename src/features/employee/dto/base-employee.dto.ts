import { IsBoolean, IsNotEmpty } from 'class-validator';

export class BaseEmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  active: boolean;
}

import { IsNotEmpty, Length } from 'class-validator';

export class BaseCompanyDto {
  @IsNotEmpty()
  @Length(4, 80)
  social_name: string;

  @IsNotEmpty()
  active: boolean;
}

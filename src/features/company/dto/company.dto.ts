import { IsNotEmpty, Length } from 'class-validator';

export class CompanyDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  @Length(4, 80)
  social_name: string;

  @IsNotEmpty()
  active: boolean;
}

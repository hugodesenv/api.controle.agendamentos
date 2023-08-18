import { IsNotEmpty } from 'class-validator';

export class DeleteCompanyDto {
  @IsNotEmpty()
  id: string;
}

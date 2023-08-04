import { IsNumber } from 'class-validator';

export class DeleteCompanyDto {
  @IsNumber()
  id: number;
}

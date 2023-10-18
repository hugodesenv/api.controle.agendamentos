import { IsBoolean, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class ItemFindDto {
  @IsNotEmpty()
  company_id: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}

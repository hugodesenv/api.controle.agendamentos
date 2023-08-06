import { IsBoolean, IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty()
  description: string;

  @IsISO8601()
  duration: Date;

  @IsBoolean()
  active: boolean;
}

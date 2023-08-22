import { IsBoolean, IsEmpty, IsInt, IsNotEmpty } from 'class-validator';

export class ItemDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  fk_company: string;

  @IsNotEmpty()
  description: string;

  @IsInt()
  service_minutes: number;

  @IsBoolean()
  active: boolean;

  @IsNotEmpty({
    message: 'Type is Empty! Expected: "service", "product" or "undefined"',
  })
  type: string;
}

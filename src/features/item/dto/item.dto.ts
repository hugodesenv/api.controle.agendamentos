import { ItemTypesEnum } from './../enum/item.types.enum';
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, ValidateIf } from 'class-validator';

export class ItemDto {
  @IsNotEmpty()
  action: string;

  @IsNotEmpty()
  fk_company: string;

  @IsNotEmpty()
  description: string;

  @IsInt()
  @ValidateIf((value) => value.type == ItemTypesEnum.tService)
  service_minutes: number;

  @IsBoolean()
  active: boolean;

  @IsEnum(ItemTypesEnum)
  type: ItemTypesEnum;
}

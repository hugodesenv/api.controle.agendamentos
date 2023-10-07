import { ItemTypesEnum } from './../enum/item.types.enum';
export declare class ItemDto {
    action: string;
    fk_company: string;
    description: string;
    service_minutes: number;
    active: boolean;
    type: ItemTypesEnum;
}

import { ItemDto } from './dto/item.dto';
import { ItemService } from './item.service';
import { ItemFindDto } from './dto/item-find.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(itemDto: ItemDto): Promise<number>;
    findAll(dto: ItemFindDto): Promise<{}>;
}

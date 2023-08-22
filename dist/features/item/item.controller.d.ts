import { ItemDto } from './dto/item.dto';
import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(itemDto: ItemDto): Promise<number>;
}

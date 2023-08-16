import { CreateItemDto } from './dto/create-item.dto';
import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(itemDto: CreateItemDto): Promise<number>;
}

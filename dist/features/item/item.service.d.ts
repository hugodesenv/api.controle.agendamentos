import { ItemFindDto } from './dto/item-find.dto';
import { ItemDto } from './dto/item.dto';
import { Knex } from 'nestjs-knex';
export declare class ItemService {
    private readonly knex;
    constructor(knex: Knex);
    create(itemDto: ItemDto): Promise<number>;
    findAll(filter: ItemFindDto): Promise<{}>;
    private buildQuery;
}

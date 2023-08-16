import { CreateItemDto } from './dto/create-item.dto';
import { Knex } from 'nestjs-knex';
export declare class ItemService {
    private readonly knex;
    constructor(knex: Knex);
    create(itemDto: CreateItemDto): Promise<number>;
}

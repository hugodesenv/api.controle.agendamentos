import { Knex } from 'nestjs-knex';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServiceService {
    private readonly knex;
    private readonly TABLE_NAME;
    constructor(knex: Knex);
    create(dto: CreateServiceDto): Promise<number>;
}

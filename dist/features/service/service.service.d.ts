import { Knex } from 'nestjs-knex';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServiceService {
    private readonly knex;
    constructor(knex: Knex);
    create(dto: CreateServiceDto): Promise<number>;
}

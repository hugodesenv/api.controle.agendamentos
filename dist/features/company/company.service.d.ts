import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Knex } from 'nestjs-knex';
export declare class CompanyService {
    private readonly knex;
    private readonly TABLE_NAME;
    constructor(knex: Knex);
    create(dto: CreateCompanyDto): Promise<number>;
    update(dto: UpdateCompanyDto): Promise<number>;
}

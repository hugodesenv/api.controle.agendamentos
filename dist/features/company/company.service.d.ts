import { Knex } from 'nestjs-knex';
import { CompanyDto } from './dto/company.dto';
export declare class CompanyService {
    private readonly knex;
    constructor(knex: Knex);
    create(createCompanyDto: CompanyDto): Promise<number>;
    update(id: string, updateCompanyDto: CompanyDto): Promise<any>;
    delete(id: string): Promise<any>;
}

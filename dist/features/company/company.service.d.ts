import { Knex } from 'nestjs-knex';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private readonly knex;
    constructor(knex: Knex);
    create(createCompanyDto: CreateCompanyDto): Promise<number>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<any>;
    delete(id: string): Promise<any>;
}

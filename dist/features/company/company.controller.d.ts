import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(dto: CreateCompanyDto): Promise<{
        id: number;
    }>;
    update(dto: UpdateCompanyDto): Promise<{
        affected: number;
    }>;
}

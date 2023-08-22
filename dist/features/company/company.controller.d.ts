import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CompanyDto): Promise<number>;
    update(id: string, updateCompanyDto: CompanyDto): Promise<any>;
    delete(id: string): Promise<any>;
}

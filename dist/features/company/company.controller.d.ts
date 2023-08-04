import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { DeleteCompanyDto } from './dto/delete-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(dto: CreateCompanyDto): Promise<{
        id: number;
    }>;
    update(dto: UpdateCompanyDto): Promise<{
        affected: number;
    }>;
    delete(dto: DeleteCompanyDto): Promise<{
        success: boolean;
        rows_affected: number;
    }>;
}

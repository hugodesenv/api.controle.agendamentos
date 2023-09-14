import { CompanyInterface } from 'src/features/company/interface/company.interface';
export interface EmployeeInterface {
    id: string;
    name: string;
    active?: boolean;
    company?: CompanyInterface;
}

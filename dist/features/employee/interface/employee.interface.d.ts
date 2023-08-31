import { CompanyInterface } from 'src/interface/db/company.interface';
export interface EmployeeInterface {
    id: string;
    name: string;
    active?: boolean;
    company?: CompanyInterface;
}

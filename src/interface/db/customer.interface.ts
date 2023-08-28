import { CompanyInterface } from './company.interface';

export interface CustomerInterface {
  id: string;
  name: string;
  cellphone?: string;
  email?: string;
  company: CompanyInterface;
}

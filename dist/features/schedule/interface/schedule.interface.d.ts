import { EmployeeInterface } from 'src/features/employee/interface/employee.interface';
import { CustomerInterface } from 'src/interface/db/customer.interface';
export interface ScheduleInterface {
    id: string;
    schedule_date: string;
    total_minutes: number;
    total_price: number;
    customer: CustomerInterface;
    employee: EmployeeInterface;
}

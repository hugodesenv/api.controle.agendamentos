import { BaseAccountDto } from './base-account.dto';
export declare class CreateAccountDto extends BaseAccountDto {
    username: string;
    fk_company: number;
}

import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { ForgotPasswordAccountDto } from './dto/forgot-password-account.dto';
import { LoginAccountDto } from './dto/login-account.dto';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    login(dto: LoginAccountDto): Promise<{}>;
    create(dto: AccountDto): Promise<{}>;
    update(dto: AccountDto): Promise<{
        affected: number;
    }>;
    forgotPassword(queryDto: ForgotPasswordAccountDto): Promise<{
        message: string;
    }>;
}

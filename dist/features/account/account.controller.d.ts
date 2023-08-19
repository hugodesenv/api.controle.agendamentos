import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { ForgotPasswordAccountDto } from './dto/forgot-password-account.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    login(dto: LoginAccountDto): Promise<{}>;
    create(dto: CreateAccountDto): Promise<{}>;
    update(dto: UpdateAccountDto): Promise<{
        affected: number;
    }>;
    forgotPassword(queryDto: ForgotPasswordAccountDto): Promise<{
        message: string;
    }>;
}

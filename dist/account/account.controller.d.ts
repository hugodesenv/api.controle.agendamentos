import { LoginAccountDto } from './dto/login-account.dto';
import { AccountService } from './account.service';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    login(dto: LoginAccountDto): Promise<{}>;
}

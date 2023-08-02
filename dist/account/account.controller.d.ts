import { LoginAccountDto } from './dto/login-account.dto';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
export declare class AccountController {
    private accountService;
    constructor(accountService: AccountService);
    login(dto: LoginAccountDto): Promise<{}>;
    create(dto: CreateAccountDto): Promise<{}>;
}

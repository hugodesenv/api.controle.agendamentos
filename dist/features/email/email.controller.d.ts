import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
export declare class EmailController {
    private emailService;
    constructor(emailService: EmailService);
    create(createEmailDto: CreateEmailDto): Promise<boolean>;
}

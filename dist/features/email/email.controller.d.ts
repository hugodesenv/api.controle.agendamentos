import { EmailService } from './email.service';
import { EmailDto } from './dto/email.dto';
export declare class EmailController {
    private emailService;
    constructor(emailService: EmailService);
    create(emailDto: EmailDto): Promise<boolean>;
}

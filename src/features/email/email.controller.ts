import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  async create(@Body() createEmailDto: CreateEmailDto): Promise<boolean> {
    try {
      const res = await this.emailService.create(createEmailDto);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

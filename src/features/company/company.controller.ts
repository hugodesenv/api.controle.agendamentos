import { CompanyService } from './company.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  async create(@Body() dto: CreateCompanyDto) {
    try {
      let id = await this.companyService.create(dto);
      return { id };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Put('update')
  async update(@Body() dto: UpdateCompanyDto) {
    try {
      let affected: number = await this.companyService.update(dto);
      return { affected };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { DeleteCompanyDto } from './dto/delete-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() dto: CreateCompanyDto) {
    try {
      let id = await this.companyService.create(dto);
      return { id };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Patch()
  async update(@Body() dto: UpdateCompanyDto) {
    try {
      let affected: number = await this.companyService.update(dto);
      return { affected };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Delete()
  async delete(@Body() dto: DeleteCompanyDto) {
    try {
      let res: number = await this.companyService.delete(dto);
      return { success: res > 0, rows_affected: res };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

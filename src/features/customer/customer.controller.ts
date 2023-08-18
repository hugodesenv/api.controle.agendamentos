import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto): Promise<any> {
    try {
      let id = await this.customerService.create(createCustomerDto);
      return { id };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  async findAll(@Query('companyID') companyID: number): Promise<any> {
    try {
      const res = await this.customerService.findAll(companyID);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Delete()
  async remove(@Query('id') id: number) {
    try {
      const res = await this.customerService.remove(id);
      return res;
    } catch (e) {
      console.log(e);
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

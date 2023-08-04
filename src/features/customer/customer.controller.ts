import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { ICustomer } from './interface/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('create')
  async create(@Body() createCustomerDto: CreateCustomerDto): Promise<{}> {
    try {
      let id = await this.customerService.create(createCustomerDto);
      return { id };
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  async findAll(): Promise<ICustomer[]> {
    return await this.customerService.findAll();
  }
}

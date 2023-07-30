import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { Customer } from './interface/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): string {
    return 'ok';
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customerService.findAll();
  }
}

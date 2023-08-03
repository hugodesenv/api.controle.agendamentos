import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerService } from './customer.service';
import { ICustomer } from './interface/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto): Promise<{}> {
    let id = await this.customerService.create(createCustomerDto);
    return { new_id: id };
  }

  @Get()
  async findAll(): Promise<ICustomer[]> {
    return await this.customerService.findAll();
  }
}

import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { EmployeeFindAllInterface } from './interface/employee.findAll.interface';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() employeeDto: EmployeeDto) {
    try {
      const id = await this.employeeService.create(employeeDto);
      return id;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() employeeDto: EmployeeDto) {
    try {
      const res = await this.employeeService.update(id, employeeDto);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Delete('id')
  async delete(@Param('id') id: string) {
    try {
      const res = await this.employeeService.delete(id);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Get(':company_id')
  async findAll(@Param('company_id') company_id: string, @Body() filter: EmployeeFindAllInterface): Promise<any> {
    try {
      const res = await this.employeeService.findAll(company_id, filter);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

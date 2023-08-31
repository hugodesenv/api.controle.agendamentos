import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ScheduleDto } from './dto/schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() createScheduleDto: ScheduleDto) {
    try {
      const res = await this.scheduleService.create(createScheduleDto);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateScheduleDto: ScheduleDto) {
    try {
      const res = await this.scheduleService.update(id, updateScheduleDto);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  async findAll(@Query() filters: any) {
    try {
      var filter = {};
      const res = await this.scheduleService.findAll(filters);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

import { Body, Controller, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
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
}

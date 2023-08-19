import { ScheduleService } from './schedule.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    try {
      const res = await this.scheduleService.create(createScheduleDto);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    try {
      console.log('body > ', updateScheduleDto);
      implementar o update do agendamento aqui
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}

import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { ScheduleItemService } from '../schedule_item/schedule-item.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleItemService],
})
export class ScheduleModule {}

import { Module } from '@nestjs/common';
import { ScheduleItemController } from './schedule-item.controller';
import { ScheduleItemService } from './schedule-item.service';

@Module({
  controllers: [ScheduleItemController],
  providers: [ScheduleItemService],
})
export class ScheduleItemModule {}

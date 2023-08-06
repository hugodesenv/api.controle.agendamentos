import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { ScheduleServiceService } from '../schedule_service/schedule-service.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleServiceService],
})
export class ScheduleModule {}

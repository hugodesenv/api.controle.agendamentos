import { ScheduleDto } from './dto/schedule.dto';
import { ScheduleService } from './schedule.service';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createScheduleDto: ScheduleDto): Promise<any>;
    update(id: string, updateScheduleDto: ScheduleDto): Promise<void>;
}

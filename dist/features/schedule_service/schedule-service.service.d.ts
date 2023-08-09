import { Knex } from 'nestjs-knex';
import { CreateScheduleServiceDto } from './dto/create-schedule-service.dto';
export declare class ScheduleServiceService {
    private readonly knex;
    constructor(knex: Knex);
    create(dto: CreateScheduleServiceDto): Promise<number>;
}

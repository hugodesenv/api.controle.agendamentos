import { Knex } from 'nestjs-knex';
export declare class ScheduleServiceService {
    constructor(knex: Knex);
    create(): Promise<string>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
const schedule_service_service_1 = require("../schedule_service/schedule-service.service");
let ScheduleService = exports.ScheduleService = class ScheduleService {
    constructor(knex, scheduleService) {
        this.knex = knex;
        this.scheduleService = scheduleService;
    }
    async create(createAccountDto) {
        const [scheduleID] = await this.knex('schedule')
            .insert({
            fk_account: createAccountDto.fk_account,
            fk_customer: createAccountDto.fk_customer,
            schedule_date: createAccountDto.schedule_date,
        })
            .returning('id');
        var idsScheduleService = [];
        await Promise.all(createAccountDto.services.map(async (scheduleServiceDto) => {
            let objectScheduleService = {
                ...scheduleServiceDto,
                fk_schedule: scheduleID['id'],
            };
            const res = await this.scheduleService.create(objectScheduleService);
            idsScheduleService.push(res['id']);
        }));
        return {
            scheduleID: scheduleID,
            scheduleServiceID: idsScheduleService,
        };
    }
};
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, schedule_service_service_1.ScheduleServiceService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map
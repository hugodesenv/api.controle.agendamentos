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
const schedule_item_service_1 = require("../schedule_item/schedule-item.service");
let ScheduleService = exports.ScheduleService = class ScheduleService {
    constructor(knex, itemService) {
        this.knex = knex;
        this.itemService = itemService;
    }
    async create(createAccountDto) {
        const [scheduleInsertResult] = await this.knex('schedule')
            .insert({
            fk_employee: createAccountDto.fk_employee,
            fk_customer: createAccountDto.fk_customer,
            schedule_date: createAccountDto.schedule_date,
        })
            .returning('id');
        const scheduleID = scheduleInsertResult['id'];
        var idsScheduleItem = [];
        await Promise.all(createAccountDto.items.map(async (scheduleItemDto) => {
            const objectScheduleItem = {
                ...scheduleItemDto,
                fk_schedule: scheduleID,
            };
            const id = await this.itemService.create(objectScheduleItem);
            idsScheduleItem.push(id);
        }));
        return {
            schedule_id: scheduleID,
            items_id: idsScheduleItem,
        };
    }
};
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, schedule_item_service_1.ScheduleItemService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map
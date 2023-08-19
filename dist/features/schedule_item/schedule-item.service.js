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
exports.ScheduleItemService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let ScheduleItemService = exports.ScheduleItemService = class ScheduleItemService {
    constructor(knex) {
        this.knex = knex;
    }
    async create(createScheduleItemDto) {
        const [res] = await this.knex('schedule_item')
            .insert({
            fk_schedule: createScheduleItemDto.fk_schedule,
            fk_item: createScheduleItemDto.fk_item,
            service_minutes: createScheduleItemDto.service_minutes,
            price: createScheduleItemDto.price,
        })
            .returning('id');
        return res;
    }
};
exports.ScheduleItemService = ScheduleItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], ScheduleItemService);
//# sourceMappingURL=schedule-item.service.js.map
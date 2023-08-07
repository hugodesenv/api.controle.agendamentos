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
exports.ScheduleServiceService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let ScheduleServiceService = exports.ScheduleServiceService = class ScheduleServiceService {
    constructor(knex) {
        this.knex = knex;
        this.TABLE_NAME = 'schedule_service';
    }
    async create(dto) {
        let query = await this.knex(this.TABLE_NAME)
            .insert({
            fk_schedule: dto.fk_schedule,
            fk_service: dto.fk_service,
            service_minutes: dto.service_minutes,
        })
            .returning('id');
        return query[0]['id'];
    }
};
exports.ScheduleServiceService = ScheduleServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], ScheduleServiceService);
//# sourceMappingURL=schedule-service.service.js.map
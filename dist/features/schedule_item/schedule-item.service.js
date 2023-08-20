"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleItemService = void 0;
const common_1 = require("@nestjs/common");
let ScheduleItemService = exports.ScheduleItemService = class ScheduleItemService {
    async create(trx, createScheduleItemDto) {
        const [res] = await trx('schedule_item')
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
    (0, common_1.Injectable)()
], ScheduleItemService);
//# sourceMappingURL=schedule-item.service.js.map
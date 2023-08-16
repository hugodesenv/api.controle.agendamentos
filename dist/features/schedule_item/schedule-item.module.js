"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleItemModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_item_controller_1 = require("./schedule-item.controller");
const schedule_item_service_1 = require("./schedule-item.service");
let ScheduleItemModule = exports.ScheduleItemModule = class ScheduleItemModule {
};
exports.ScheduleItemModule = ScheduleItemModule = __decorate([
    (0, common_1.Module)({
        controllers: [schedule_item_controller_1.ScheduleItemController],
        providers: [schedule_item_service_1.ScheduleItemService],
    })
], ScheduleItemModule);
//# sourceMappingURL=schedule-item.module.js.map
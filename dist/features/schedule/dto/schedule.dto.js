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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDto = void 0;
const class_validator_1 = require("class-validator");
const constants_class_1 = require("../../../shared/constants.class");
const schedule_situation_enum_1 = require("../enum/schedule.situation.enum");
class ScheduleDto {
}
exports.ScheduleDto = ScheduleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "fk_customer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], ScheduleDto.prototype, "schedule_date", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.action === constants_class_1.DB_ACTION.insert),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "fk_employee", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(schedule_situation_enum_1.ScheduleSituationEnum),
    __metadata("design:type", String)
], ScheduleDto.prototype, "situation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], ScheduleDto.prototype, "items", void 0);
//# sourceMappingURL=schedule.dto.js.map
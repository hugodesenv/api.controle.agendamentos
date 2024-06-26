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
exports.EmployeeDto = void 0;
const class_validator_1 = require("class-validator");
const dabatase_action_enum_1 = require("../../dabatase/enum/dabatase.action.enum");
class EmployeeDto {
}
exports.EmployeeDto = EmployeeDto;
__decorate([
    (0, class_validator_1.IsEnum)(dabatase_action_enum_1.DatabaseActionEnum),
    __metadata("design:type", String)
], EmployeeDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmployeeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EmployeeDto.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.action === dabatase_action_enum_1.DatabaseActionEnum.insert),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EmployeeDto.prototype, "fk_company", void 0);
//# sourceMappingURL=employee.dto.js.map
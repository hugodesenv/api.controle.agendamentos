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
exports.ItemDto = void 0;
const item_types_enum_1 = require("./../enum/item.types.enum");
const class_validator_1 = require("class-validator");
class ItemDto {
}
exports.ItemDto = ItemDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ItemDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ItemDto.prototype, "fk_company", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ItemDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.ValidateIf)((value) => value.type == item_types_enum_1.ItemTypesEnum.tService),
    __metadata("design:type", Number)
], ItemDto.prototype, "service_minutes", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ItemDto.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(item_types_enum_1.ItemTypesEnum),
    __metadata("design:type", String)
], ItemDto.prototype, "type", void 0);
//# sourceMappingURL=item.dto.js.map
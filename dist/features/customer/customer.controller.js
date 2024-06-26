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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_dto_1 = require("./dto/customer.dto");
let CustomerController = exports.CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    async create(customerDto) {
        try {
            const res = await this.customerService.create(customerDto);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async findAll(companyId) {
        try {
            const res = await this.customerService.findAll(companyId);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException({ detail: e }, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async remove(id) {
        try {
            const res = await this.customerService.remove(id);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async update(body, id) {
        try {
            const res = await this.customerService.update(body, id);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(e, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':company_id'),
    __param(0, (0, common_1.Param)('company_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDto, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "update", null);
exports.CustomerController = CustomerController = __decorate([
    (0, common_1.Controller)('customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
//# sourceMappingURL=customer.controller.js.map
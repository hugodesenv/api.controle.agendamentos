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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let CompanyService = exports.CompanyService = class CompanyService {
    constructor(knex) {
        this.knex = knex;
    }
    async create(createCompanyDto) {
        const [res] = await this.knex('company')
            .insert({
            social_name: createCompanyDto.social_name,
            active: createCompanyDto.active,
        })
            .returning('id');
        return res;
    }
    async update(id, updateCompanyDto) {
        const res = await this.knex('company')
            .update({
            social_name: updateCompanyDto.social_name,
            active: updateCompanyDto.active,
        })
            .where({ id: id });
        return { rows_affected: res };
    }
    async delete(id) {
        const res = await this.knex('company').where('id', id).del();
        return { rows_affected: res };
    }
};
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], CompanyService);
//# sourceMappingURL=company.service.js.map
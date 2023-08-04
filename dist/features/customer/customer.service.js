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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const nestjs_knex_1 = require("nestjs-knex");
let CustomerService = exports.CustomerService = class CustomerService {
    constructor(knex) {
        this.knex = knex;
        this.TABLE_NAME = 'customer';
    }
    async findAll() {
        let res = await this.knex
            .select('id', 'name', 'cellphone', 'email')
            .from(this.TABLE_NAME);
        return res;
    }
    async create(dto) {
        let res = await this.knex(this.TABLE_NAME).insert(dto).returning('id');
        return res[0]['id'];
    }
};
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], CustomerService);
//# sourceMappingURL=customer.service.js.map
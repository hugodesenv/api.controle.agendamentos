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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let ItemService = exports.ItemService = class ItemService {
    constructor(knex) {
        this.knex = knex;
    }
    async create(itemDto) {
        const [query] = await this.knex('item')
            .insert({
            fk_company: itemDto.fk_company,
            description: itemDto.description,
            service_minutes: itemDto.service_minutes,
            active: itemDto.active,
            type: itemDto.type,
        })
            .returning('id');
        return query;
    }
    async findAll(filter) {
        const sql = this.buildQuery(filter);
        const query = await sql;
        return query;
    }
    buildQuery(filter) {
        let res = this.knex('item as a')
            .select('a.id', 'a.description', 'a.service_minutes', 'a.active', 'a.type')
            .where('a.fk_company', filter.company_id);
        console.log(filter.active);
        filter.active != undefined && res.andWhere('a.active', filter.active);
        return res;
    }
};
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], ItemService);
//# sourceMappingURL=item.service.js.map
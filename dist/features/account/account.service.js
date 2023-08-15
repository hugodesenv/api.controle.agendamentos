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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let AccountService = exports.AccountService = class AccountService {
    constructor(knex) {
        this.knex = knex;
    }
    async tryLogin(dto) {
        let [res] = await this.knex
            .select([
            'account.username',
            'account.email',
            'account.fk_company',
            'company.social_name',
        ])
            .from('account')
            .innerJoin('company', 'company.id', '=', 'account.fk_company')
            .where({
            'account.username': dto.username,
            'account.password': dto.password,
            'company.active': true,
        });
        return { data: res };
    }
    async create(dto) {
        let res = await this.knex('account').insert({ ...dto });
        return res['rowCount'] > 0;
    }
    async update(dto) {
        let rows_affected = await this.knex('account')
            .update({
            password: dto.password,
            active: dto.active,
            email: dto.email,
        })
            .where({ username: dto.username });
        return rows_affected;
    }
    async findAllByUsername(username) {
        const account = await this.knex('account')
            .select('*')
            .where('username', username);
        return account;
    }
};
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], AccountService);
//# sourceMappingURL=account.service.js.map
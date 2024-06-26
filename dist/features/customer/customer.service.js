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
    }
    async findAll(companyId) {
        const query = await this.knex('customer').select('*').where('fk_company', companyId).orderBy('name');
        const res = query.map((row) => {
            return {
                id: row.id,
                name: row.name,
                cellphone: row.cellphone,
                email: row.email,
                company: {
                    id: row.fk_company,
                },
            };
        });
        return res;
    }
    async create(customer) {
        const [res] = await this.buildInsert(customer);
        return res;
    }
    buildInsert(customer) {
        return this.knex('customer')
            .insert({
            fk_company: customer.fk_company,
            name: customer.name,
            email: customer.email,
            cellphone: customer.cellphone,
        })
            .returning('id');
    }
    async remove(id) {
        try {
            const rowsAffected = await this.knex('customer').delete().where('id', id);
            return { rows_affected: rowsAffected };
        }
        catch (error) {
            throw error;
        }
    }
    async update(customer, id) {
        try {
            const sql = this.buildUpdate(customer, id);
            const query = await sql;
            const success = query > 0;
            return {
                success,
                message: success === true ? 'Alteracao realizada!' : 'Nao foi possivel alterar...',
            };
        }
        catch (error) {
            throw error;
        }
    }
    buildUpdate(customer, id) {
        let data = {
            cellphone: customer.cellphone,
            email: customer.email,
            name: customer.name,
        };
        return this.knex('customer').update(data).where({ id: id });
    }
};
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], CustomerService);
//# sourceMappingURL=customer.service.js.map
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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
let EmployeeService = exports.EmployeeService = class EmployeeService {
    constructor(knex) {
        this.knex = knex;
    }
    async create(employeeDto) {
        const [res] = await this.knex('employee')
            .insert({
            name: employeeDto.name,
            active: employeeDto.active,
            fk_company: employeeDto.fk_company,
        })
            .returning('id');
        return res;
    }
    async update(id, employeeDto) {
        const rows = await this.knex('employee')
            .update({
            name: employeeDto.name,
            active: employeeDto.active,
        })
            .where({ id: id });
        return { rows_affected: rows };
    }
    async delete(id) {
        const rows = await this.knex('employee').where('id', id).del();
        return { rows_affected: rows };
    }
    async findAll(companyId) {
        const sql = this.knex('employee as a')
            .select('a.id', 'a.name', 'a.active', 'a.fk_company', 'b.social_name as company_name')
            .innerJoin('company as b', 'a.fk_company', '=', 'b.id')
            .where('a.fk_company', companyId)
            .orderBy('a.name');
        const query = await sql;
        const res = query.map((value) => {
            return {
                id: value['id'],
                name: value['name'],
                active: value['active'],
                company: {
                    id: value['fk_company'],
                    social_name: value['company_name'],
                },
            };
        });
        return res;
    }
};
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map
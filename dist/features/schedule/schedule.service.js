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
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
const schedule_item_service_1 = require("../schedule_item/schedule-item.service");
let ScheduleService = exports.ScheduleService = class ScheduleService {
    constructor(knex, itemService) {
        this.knex = knex;
        this.itemService = itemService;
    }
    async create(scheduleDto) {
        const trx = await this.knex.transaction();
        try {
            const sql = this.buildInsert(trx, scheduleDto);
            const [res] = await sql;
            await this._proccessItemInsert(res.id, scheduleDto.items?.insert, trx);
            await trx.commit();
            return { message: 'Operação realizada com sucesso!' };
        }
        catch (e) {
            trx.rollback();
            console.log({ error: e });
            throw e;
        }
    }
    buildInsert(trx, data) {
        return trx('schedule')
            .insert({
            fk_employee: data.fk_employee,
            fk_customer: data.fk_customer,
            schedule_date: data.schedule_date,
            situation: data.situation,
        })
            .returning('id');
    }
    async update(scheduleID, updateSheduleDto) {
        const trx = await this.knex.transaction();
        try {
            await this.buildUpdate(trx, updateSheduleDto, scheduleID);
            const items = updateSheduleDto.items;
            await Promise.all([
                this._proccessItemInsert(scheduleID, items.insert, trx),
                this._proccessItemUpdate(items.update, trx),
                this._proccessItemDelete(items.delete, trx),
            ]);
            trx.commit();
        }
        catch (error) {
            trx.rollback();
        }
    }
    buildUpdate(trx, dto, scheduleId) {
        return trx('schedule')
            .update({
            fk_customer: dto.fk_customer,
            schedule_date: dto.schedule_date,
            situation: dto.situation,
        })
            .where(scheduleId);
    }
    async findAll(filters) {
        const sql = this.buildQuery(filters);
        const query = await sql;
        return query.map((data) => this.mapToScheduleInterface(data));
    }
    mapToScheduleInterface(queryResult) {
        const output = {
            id: queryResult.id,
            schedule_date: queryResult.schedule_date,
            total_minutes: queryResult.total_minutes,
            total_price: queryResult.total_price,
            situation: queryResult.situation,
            employee: { id: queryResult.employee_id, name: queryResult.employee_name },
            customer: {
                id: queryResult.customer_id,
                name: queryResult.customer_name,
            },
        };
        return output;
    }
    buildQuery(filters) {
        return this.knex('schedule as a')
            .select('a.id', 'b.id as customer_id', 'b.name as customer_name', 'a.schedule_date', 'a.total_minutes', 'a.total_price', 'a.situation', 'a.date_changed', 'c.id as employee_id', 'c.name as employee_name')
            .innerJoin('customer as b', 'a.fk_customer', '=', 'b.id')
            .innerJoin('employee as c', 'a.fk_employee', '=', 'c.id');
    }
    async _proccessItemInsert(scheduleID, items, trx) {
        if (items) {
            await Promise.all(items.map(async (data) => {
                const item = { ...data, fk_schedule: scheduleID };
                await this.itemService.create(trx, item);
            }));
        }
    }
    async _proccessItemUpdate(items, trx) {
        await Promise.all(items.map(async (data) => {
            try {
            }
            catch (error) {
                console.log('schedule.service.proccessitemupdate', error);
            }
        }));
    }
    async _proccessItemDelete(ids, trx) { }
};
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, schedule_item_service_1.ScheduleItemService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map
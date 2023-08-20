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
    async create(createAccountDto) {
        const trx = await this.knex.transaction();
        try {
            const [res] = await trx('schedule')
                .insert({
                fk_employee: createAccountDto.fk_employee,
                fk_customer: createAccountDto.fk_customer,
                schedule_date: createAccountDto.schedule_date,
            })
                .returning('id');
            await Promise.all([
                this._proccessItemInsert(res.id, createAccountDto.items, trx),
            ]);
            await trx.commit();
            return { message: 'Operação realizada com sucesso!' };
        }
        catch (error) {
            trx.rollback();
            throw error;
        }
    }
    async update(scheduleID, updateSheduleDto) {
        const trx = await this.knex.transaction();
        try {
            await trx('schedule')
                .update({
                fk_customer: updateSheduleDto.fk_customer,
                schedule_date: updateSheduleDto.schedule_date,
            })
                .where(scheduleID);
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
    async _proccessItemInsert(scheduleID, items, trx) {
        items.map(async (data) => {
            const item = { ...data, fk_schedule: scheduleID };
            try {
                await this.itemService.create(trx, item);
            }
            catch (error) {
                console.log('EXCEPTION');
            }
        });
    }
    async _proccessItemUpdate(items, trx) {
        items.map(async (data) => {
            console.log('scheduke.service.ts proccessItemUpdate: ' + data);
        });
    }
    async _proccessItemDelete(ids, trx) { }
};
exports.ScheduleService = ScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, schedule_item_service_1.ScheduleItemService])
], ScheduleService);
//# sourceMappingURL=schedule.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customer_module_1 = require("./features/customer/customer.module");
const database_module_1 = require("./features/dabatase/database.module");
const account_module_1 = require("./features/account/account.module");
const company_module_1 = require("./features/company/company.module");
const schedule_module_1 = require("./features/schedule/schedule.module");
const email_module_1 = require("./features/email/email.module");
const config_1 = require("@nestjs/config");
const item_module_1 = require("./features/item/item.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            customer_module_1.CustomerModule,
            database_module_1.DatabaseModule,
            account_module_1.AccountModule,
            company_module_1.CompanyModule,
            schedule_module_1.ScheduleModule,
            email_module_1.EmailModule,
            config_1.ConfigModule.forRoot(),
            item_module_1.ItemModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
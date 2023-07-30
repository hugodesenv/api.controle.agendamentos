"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
let CustomerService = exports.CustomerService = class CustomerService {
    findAll() {
        return [
            {
                name: 'Hugo Souza',
                cellphone: '(19) 9 8961-5184',
            },
            {
                name: 'Gabriella',
                cellphone: '(19) 9 8961-4422',
            },
        ];
    }
};
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)()
], CustomerService);
//# sourceMappingURL=customer.service.js.map
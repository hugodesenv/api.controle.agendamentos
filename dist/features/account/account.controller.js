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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const email_class_1 = require("../../shared/email.class");
const account_service_1 = require("./account.service");
const account_dto_1 = require("./dto/account.dto");
const forgot_password_account_dto_1 = require("./dto/forgot-password-account.dto");
const login_account_dto_1 = require("./dto/login-account.dto");
let AccountController = exports.AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async login(dto) {
        try {
            const res = await this.accountService.tryLogin(dto);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException({ message: e.detail }, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async create(dto) {
        try {
            const success = await this.accountService.create(dto);
            return { success };
        }
        catch (e) {
            throw new common_1.HttpException({ message: e.detail }, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async update(dto) {
        try {
            let affected = await this.accountService.update(dto);
            return { affected };
        }
        catch (e) {
            throw new common_1.HttpException({ message: e.detail }, common_1.HttpStatus.FORBIDDEN);
        }
    }
    async forgotPassword(queryDto) {
        try {
            const [userData] = await this.accountService.findAllByUsername(queryDto.username);
            if (userData === undefined) {
                throw new common_1.HttpException({ message: `Usuário ${queryDto.username} não encontrado!` }, common_1.HttpStatus.BAD_REQUEST);
            }
            const pinCode = Math.floor(Math.random() * 9000 + 1000);
            const html = `<!DOCTYPE html>`
                .concat(`<html>`)
                .concat(`<head>`)
                .concat(` <title>Skedol - Recuperação de senha</title>`)
                .concat(`</head>`)
                .concat(`<body>`)
                .concat(`<h2>Recuperação de senha</h2>`)
                .concat(`<p>Olá ${queryDto.username}, tudo bem?</p>`)
                .concat(`<p>Você não consegue acessar o sistema? Não se preocupe!`)
                .concat(`<p>Segue abaixo o código de recuperação:</p>`)
                .concat(`<h1><u>${pinCode}</u></h1>`)
                .concat(`<p>Caso não foi você quem solicitou, por gentileza desconsiderar este e-mail! :)</p>`)
                .concat(`<p><b>Atenciosamente, equipe Skedol!</b></p>`)
                .concat(`</body>`)
                .concat(`</html>`);
            const configuration = {
                email: process.env.EMAIL_LOGIN,
                host: process.env.EMAIL_HOST,
                password: process.env.EMAIL_PASSWORD,
                port: parseInt(process.env.EMAIL_PORT),
            };
            const transpoter = email_class_1.EmailClass.getTransporter(configuration);
            const options = {
                from: process.env.EMAIL_LOGIN,
                to: userData.email,
                subject: 'Skedol - Esqueci minha senha',
                html: html,
            };
            const result = await transpoter.sendMail(options);
            if (result.accepted.length > 0) {
                return { message: 'E-mail de recuperação de enviado com sucesso!' };
            }
            else {
                throw new common_1.HttpException({ message: 'Erro ao enviar e-mail de recuperação.' }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        catch (e) {
            throw new common_1.HttpException({ detail: e }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_account_dto_1.LoginAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "login", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_dto_1.AccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_dto_1.AccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('forgot-password'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_account_dto_1.ForgotPasswordAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "forgotPassword", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
//# sourceMappingURL=account.controller.js.map
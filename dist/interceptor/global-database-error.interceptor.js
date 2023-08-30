"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDatabaseErrosInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
class GlobalDatabaseErrosInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.catchError)((error) => {
            const friendlyMessage = {
                '23503': 'Não é possível continuar, porque o registro possui dependências em outras tabelas',
                '235057': 'Já existe um registro com essa mesma chave!',
            };
            const outputData = {
                code: error?.response?.code,
                table: error?.response?.table,
                detail: error?.response?.detail,
                friendlyMessage: friendlyMessage[error?.response?.code],
            };
            if (outputData.code) {
                return (0, rxjs_1.throwError)(new common_1.ConflictException({ ...outputData }));
            }
            return (0, rxjs_1.throwError)(new common_1.BadRequestException(error));
        }));
    }
}
exports.GlobalDatabaseErrosInterceptor = GlobalDatabaseErrosInterceptor;
//# sourceMappingURL=global-database-error.interceptor.js.map
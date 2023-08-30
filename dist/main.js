"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
const global_database_error_interceptor_1 = require("./interceptor/global-database-error.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.useGlobalInterceptors(new global_database_error_interceptor_1.GlobalDatabaseErrosInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
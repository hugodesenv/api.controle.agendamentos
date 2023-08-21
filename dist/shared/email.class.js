"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailClass = void 0;
const knex_1 = require("knex");
const knexfile_1 = require("../features/dabatase/knexfile");
const nodemailer = require('nodemailer');
class EmailClass {
    static getTransporter(parameter) {
        return nodemailer.createTransport({
            host: parameter.host,
            port: parameter.port,
            secure: parameter.port === 465,
            auth: {
                user: parameter.email,
                pass: parameter.password,
            },
        });
    }
    static async getTransporterById(emailId) {
        const db = (0, knex_1.default)(knexfile_1.default);
        try {
            const [query] = await db
                .select(['email', 'password', 'host', 'port'])
                .from('email')
                .where('id', emailId);
            const parameters = {
                email: query['email'],
                host: query['host'],
                password: query['password'],
                port: query['port'],
            };
            const transporter = this.getTransporter(parameters);
            return transporter;
        }
        finally {
            db.destroy();
        }
    }
}
exports.EmailClass = EmailClass;
//# sourceMappingURL=email.class.js.map
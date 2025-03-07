"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_SENTRY_DSN = exports.APP_DB_DATABASE = exports.APP_DB_PASSWORD = exports.APP_DB_USERNAME = exports.APP_DB_PORT = exports.APP_DB_HOST = exports.APP_URL = exports.APP_ENV = exports.APP_PORT = exports.APP_DB_TYPE = exports.APP_JWT_SECRET_KEY = exports.APP_SECRET_KEY = exports.checkCurrentEnvironment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const types_1 = require("../types");
dotenv_1.default.config();
const APP_SECRET_KEY = process.env.APP_SECRET_KEY;
exports.APP_SECRET_KEY = APP_SECRET_KEY;
const APP_JWT_SECRET_KEY = process.env.APP_JWT_SECRET_KEY;
exports.APP_JWT_SECRET_KEY = APP_JWT_SECRET_KEY;
const APP_PORT = Number(process.env.APP_PORT) || 9000;
exports.APP_PORT = APP_PORT;
const APP_ENV = process.env.APP_ENV;
exports.APP_ENV = APP_ENV;
const APP_URL = APP_ENV === types_1.AppEnvironments.DEV ? `${process.env.APP_URL}:${APP_PORT}` : process.env.APP_URL;
exports.APP_URL = APP_URL;
const APP_DB_TYPE = process.env.APP_DB_TYPE || "postgres";
exports.APP_DB_TYPE = APP_DB_TYPE;
const APP_DB_HOST = process.env.APP_DB_HOST;
exports.APP_DB_HOST = APP_DB_HOST;
const APP_DB_PORT = process.env.APP_DB_PORT;
exports.APP_DB_PORT = APP_DB_PORT;
const APP_DB_USERNAME = process.env.APP_DB_USERNAME;
exports.APP_DB_USERNAME = APP_DB_USERNAME;
const APP_DB_PASSWORD = process.env.APP_DB_PASSWORD;
exports.APP_DB_PASSWORD = APP_DB_PASSWORD;
const APP_DB_DATABASE = process.env.APP_DB_DATABASE;
exports.APP_DB_DATABASE = APP_DB_DATABASE;
const APP_SENTRY_DSN = process.env.APP_SENTRY_DSN;
exports.APP_SENTRY_DSN = APP_SENTRY_DSN;
const checkCurrentEnvironment = (environment) => {
    return APP_ENV === environment;
};
exports.checkCurrentEnvironment = checkCurrentEnvironment;

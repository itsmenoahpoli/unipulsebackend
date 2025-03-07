"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandlerMiddleware = exports.initializeMiddlewares = void 0;
const requests_logger_middleware_1 = require("./requests-logger.middleware");
const global_error_middleware_1 = require("./global-error.middleware");
Object.defineProperty(exports, "GlobalErrorHandlerMiddleware", { enumerable: true, get: function () { return global_error_middleware_1.ErrorHandlerMiddleware; } });
const initializeMiddlewares = (app) => {
    // app.use(CheckApiKeyMiddleware);
    app.use(requests_logger_middleware_1.RequestsLoggerMiddleware);
};
exports.initializeMiddlewares = initializeMiddlewares;

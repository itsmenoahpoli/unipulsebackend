"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const Sentry = __importStar(require("@sentry/node"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const database_1 = require("./database");
const configs_1 = require("./configs");
const types_1 = require("./types");
require("./configs/sentry.config");
dotenv_1.default.config();
const app = (0, express_1.default)();
Sentry.setupExpressErrorHandler(app);
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.disable("powered-by");
(0, middlewares_1.initializeMiddlewares)(app);
(0, routers_1.initializeApiRoutes)(app);
(0, database_1.initializeDatabase)();
app.use(middlewares_1.GlobalErrorHandlerMiddleware);
const runApp = () => {
    const appPort = configs_1.SETTINGS.APP_PORT;
    if (!appPort) {
        console.error(`[ERROR]: No app port specified from settings`);
        return;
    }
    app.listen(appPort, () => {
        if (configs_1.SETTINGS.APP_ENV === types_1.AppEnvironments.DEV) {
            console.info(`[APP]: App started and running in ${configs_1.SETTINGS.APP_URL}`);
        }
    });
};
exports.runApp = runApp;

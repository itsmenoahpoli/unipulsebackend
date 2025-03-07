"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const database_1 = require("./database");
const configs_1 = require("./configs");
const types_1 = require("./types");
dotenv_1.default.config();
const app = (0, express_1.default)();
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemRouter = void 0;
const express_1 = require("express");
const system_controller_1 = require("./system.controller");
class SystemRouter {
    router;
    systemController;
    constructor() {
        this.router = (0, express_1.Router)();
        this.systemController = new system_controller_1.SystemController();
        this.initializeRoutes();
    }
    get routerRoutes() {
        return this.router;
    }
    initializeRoutes() {
        this.router.get("/healthcheck", this.systemController.healthcheck);
    }
}
exports.SystemRouter = SystemRouter;

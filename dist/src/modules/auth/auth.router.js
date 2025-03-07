"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
exports.AuthRouter = (0, express_1.Router)().post("/signin", auth_controller_1.AuthController.signinHandler).post("/signup", auth_controller_1.AuthController.signupHandler);

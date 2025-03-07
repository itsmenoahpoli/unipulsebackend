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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
require("reflect-metadata");
const base_controller_1 = require("../../modules/base.controller");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./auth.dto");
const decorators_1 = require("../../decorators");
const types_1 = require("../../types");
class AuthController extends base_controller_1.BaseController {
    authService;
    constructor() {
        super();
        this.authService = new auth_service_1.AuthService();
        this.bindClassMethods(this);
    }
    async signinHandler(request, response, next) {
        const result = await this.authService.signinAccount(request.body);
        if (!result) {
            return this.sendHttpResponse(response, types_1.HttpErrorTypes.UNAUTHORIZED_ERROR, types_1.HttpStatusCode.UNAUTHORIZED);
        }
        return this.sendHttpResponse(response, result, types_1.HttpStatusCode.OK);
    }
    async signupHandler(request, response, next) {
        const result = await this.authService.signupAccount(request.body);
        if (result.accountExists) {
            return this.sendHttpResponse(response, types_1.HttpErrorTypes.ALREADY_EXISTS, types_1.HttpStatusCode.UNPROCESSABLE_ENTITY);
        }
        return this.sendHttpResponse(response, result, types_1.HttpStatusCode.CREATED);
    }
}
exports.AuthController = AuthController;
__decorate([
    (0, decorators_1.ValidatePayload)(auth_dto_1.SigninCredentialsDTO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signinHandler", null);
__decorate([
    (0, decorators_1.ValidatePayload)(auth_dto_1.SignupDataDTO),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signupHandler", null);

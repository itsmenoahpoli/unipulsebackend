"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const utils_1 = require("../../utils");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./auth.dto");
const types_1 = require("../../types");
exports.AuthController = {
    async signinHandler(request, response, next) {
        const validatePayload = await (0, utils_1.validateRequestBody)(auth_dto_1.SigninCredentialsDTO, request.body);
        if (validatePayload.isError) {
            next(validatePayload.errors);
        }
        const result = await auth_service_1.AuthService.signinAccount(request.body);
        if (!result) {
            (0, utils_1.SendHttpResponse)(response, types_1.HttpErrorTypes.UNAUTHORIZED_ERROR, types_1.HttpStatusCode.UNAUTHORIZED);
            return;
        }
        (0, utils_1.SendHttpResponse)(response, result, types_1.HttpStatusCode.OK);
    },
    async signupHandler(request, response, next) {
        const validatePayload = await (0, utils_1.validateRequestBody)(auth_dto_1.SignupDataDTO, request.body);
        if (validatePayload.isError) {
            return next(validatePayload.errors);
        }
        const result = await auth_service_1.AuthService.signupAccount(request.body);
        if (result.accountExists) {
            (0, utils_1.SendHttpResponse)(response, types_1.HttpErrorTypes.ALREADY_EXISTS, types_1.HttpStatusCode.UNPROCESSABLE_ENTITY);
            return;
        }
        (0, utils_1.SendHttpResponse)(response, result, types_1.HttpStatusCode.CREATED);
    },
};

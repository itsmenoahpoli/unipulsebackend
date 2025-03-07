"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemController = void 0;
const utils_1 = require("../../utils");
const types_1 = require("../../types");
class SystemController {
    healthcheck(request, response, next) {
        return (0, utils_1.SendHttpResponse)(response, { status: "online" }, types_1.HttpStatusCode.OK);
    }
}
exports.SystemController = SystemController;

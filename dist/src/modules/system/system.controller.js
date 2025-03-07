"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemController = void 0;
const types_1 = require("../../types");
exports.SystemController = {
    healthcheck: (request, response, next) => {
        response
            .status(types_1.HttpStatusCode.OK)
            .json({
            message: "SYSTEM_ONLINE",
        })
            .send();
    },
};

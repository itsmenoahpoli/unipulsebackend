"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBody = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const createRequestBodyValidationResult = (result) => {
    const { isError, errors } = result;
    return {
        isError,
        errors,
    };
};
const validateRequestBody = async (dto, obj) => {
    const transformedClass = (0, class_transformer_1.plainToClass)(dto, obj);
    const errors = await (0, class_validator_1.validate)(transformedClass);
    if (errors.length) {
        const errorData = errors.map((err) => {
            const { property, constraints } = err;
            return {
                field: property,
                errors: constraints,
            };
        });
        return createRequestBodyValidationResult({ isError: true, errors: errorData });
    }
    return createRequestBodyValidationResult({ isError: false, errors: null });
};
exports.validateRequestBody = validateRequestBody;

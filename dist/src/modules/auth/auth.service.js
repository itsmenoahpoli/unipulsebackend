"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_service_1 = require("../../modules/users/users.service");
const utils_1 = require("../../utils");
const configs_1 = require("../../configs");
exports.AuthService = {
    async signinAccount(credentials) {
        const user = await users_service_1.UsersService.findByEmail(credentials.email);
        const isPasswordVerified = user ? await (0, utils_1.verifyPassword)(user?.password, credentials.password) : false;
        if (!user || !isPasswordVerified) {
            return null;
        }
        const authToken = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, configs_1.SETTINGS.APP_JWT_SECRET_KEY, { expiresIn: "1h" });
        return {
            authToken,
        };
    },
    async signupAccount(accountData) {
        const user = await users_service_1.UsersService.findByEmail(accountData.email);
        if (user) {
            return {
                accountExists: true,
            };
        }
        const createUser = await users_service_1.UsersService.createUser({ ...accountData, isEnabled: true });
        console.log(createUser);
        return {
            accountExists: false,
            user: createUser,
        };
    },
};

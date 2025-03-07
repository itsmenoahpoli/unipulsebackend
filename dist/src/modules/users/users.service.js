"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const database_1 = require("../../database");
const utils_1 = require("../../utils");
exports.UsersService = {
    async findByEmail(email) {
        const user = await database_1.userRepository.findOneBy({ email });
        return user;
    },
    async createUser(data) {
        const user = database_1.userRepository.create({ ...data, password: await (0, utils_1.encryptPassword)(data.password) });
        await database_1.userRepository.save(user);
        return user;
    }
};

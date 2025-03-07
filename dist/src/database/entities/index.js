"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementEntity = exports.UserRoleEntity = exports.UserEntity = void 0;
var user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "UserEntity", { enumerable: true, get: function () { return user_entity_1.User; } });
var user_role_entity_1 = require("./user-role.entity");
Object.defineProperty(exports, "UserRoleEntity", { enumerable: true, get: function () { return user_role_entity_1.UserRole; } });
var announcement_entity_1 = require("./announcement.entity");
Object.defineProperty(exports, "AnnouncementEntity", { enumerable: true, get: function () { return announcement_entity_1.Announcement; } });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.BaseRepository = exports.initializeDatabase = exports.DBDataSource = void 0;
const typeorm_1 = require("typeorm");
const repositories_1 = require("./repositories");
Object.defineProperty(exports, "BaseRepository", { enumerable: true, get: function () { return repositories_1.BaseRepository; } });
const entities_1 = require("./entities");
const configs_1 = require("../configs");
const DBDataSource = new typeorm_1.DataSource({
    type: configs_1.SETTINGS.APP_DB_TYPE,
    host: configs_1.SETTINGS.APP_DB_HOST,
    port: Number(configs_1.SETTINGS.APP_DB_PORT),
    username: configs_1.SETTINGS.APP_DB_USERNAME,
    password: configs_1.SETTINGS.APP_DB_PASSWORD,
    database: configs_1.SETTINGS.APP_DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [__dirname + "/entities/*.entity.ts"],
    migrations: [__dirname + "/migrations/*.migration.ts"],
    subscribers: [],
});
exports.DBDataSource = DBDataSource;
let userRepository;
const initializeDatabase = () => {
    DBDataSource.initialize()
        .then(() => {
        console.info("Database successfully sycned!");
        // Set repositories
        exports.userRepository = userRepository = DBDataSource.getRepository(entities_1.User);
    })
        .catch((error) => {
        console.error("Failed to sync database");
        console.error(error);
    });
};
exports.initializeDatabase = initializeDatabase;

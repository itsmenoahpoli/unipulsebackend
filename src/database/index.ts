import { DataSource, Repository, type DataSourceOptions } from "typeorm";
import { UserEntity, AnnouncementEntity } from "./entities";
import { SETTINGS } from "@/configs";

const DBDataSource = new DataSource({
  type: SETTINGS.APP_DB_TYPE,
  host: SETTINGS.APP_DB_HOST,
  port: Number(SETTINGS.APP_DB_PORT),
  username: SETTINGS.APP_DB_USERNAME,
  password: SETTINGS.APP_DB_PASSWORD,
  database: SETTINGS.APP_DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entities/*.entity.ts"],
  migrations: [__dirname + "/migrations/*.migration.ts"],
  subscribers: [],
} as DataSourceOptions);

let usersRepository: Repository<UserEntity>;
let announcementsRepository: Repository<AnnouncementEntity>;

const initializeDatabase = () => {
  DBDataSource.initialize()
    .then(() => {
      console.info("Database successfully sycned!");

      usersRepository = DBDataSource.getRepository(UserEntity);
      announcementsRepository = DBDataSource.getRepository(AnnouncementEntity);
    })
    .catch((error) => {
      console.error("Failed to sync database");
      console.error(error);
    });
};

export { initializeDatabase, DBDataSource, usersRepository, announcementsRepository };

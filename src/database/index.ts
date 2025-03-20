import { DataSource, Repository, type DataSourceOptions } from "typeorm";
import { UserEntity, AnnouncementEntity, EventEntity } from "./entities";
import { SETTINGS } from "@/configs";

const DBDataSource = new DataSource({
  type: SETTINGS.APP_DB_TYPE,
  host: SETTINGS.APP_DB_HOST,
  port: Number(SETTINGS.APP_DB_PORT),
  username: SETTINGS.APP_DB_USERNAME,
  password: SETTINGS.APP_DB_PASSWORD,
  database: SETTINGS.APP_DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entities/*.entity.ts"],
  migrations: [__dirname + "/migrations/*.migration.ts"],
  subscribers: [],
} as DataSourceOptions);

let usersRepository: Repository<UserEntity>;
let announcementsRepository: Repository<AnnouncementEntity>;
let eventsRepository: Repository<EventEntity>;

const initializeDatabase = () => {
  DBDataSource.initialize()
    .then(() => {
      console.info("Database successfully sycned!");

      usersRepository = DBDataSource.getRepository(UserEntity);
      announcementsRepository = DBDataSource.getRepository(AnnouncementEntity);
      eventsRepository = DBDataSource.getRepository(EventEntity);
    })
    .catch((error) => {
      console.error("Failed to sync database");
      console.error(error);
    });
};

export { initializeDatabase, DBDataSource, usersRepository, announcementsRepository, eventsRepository };

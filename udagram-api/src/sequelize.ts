import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.dbPort,
//
//   dialect: "postgres",
//   storage: ":memory:",
// });

export const sequelize = new Sequelize(
    'postgres://postgres:postgres@database-1.c6khadpvsy5e.us-east-1.rds.amazonaws.com:5432/postgres'
);

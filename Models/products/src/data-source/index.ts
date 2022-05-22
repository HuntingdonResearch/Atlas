import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { DATABASE, HOST, PASSWORD, PORT, USERNAME } from '../config';
import { entities } from '../entities';

export const ProductsDataSource = new DataSource({
  type: 'mysql',
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: false,
  entities,
  migrations: [],
  subscribers: []
});

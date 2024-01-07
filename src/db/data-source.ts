/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CharacterEntity } from './entities/character.entity';
import { StandEntity } from './entities/stand.entity';
import dotenv from 'dotenv'; 
dotenv.config();
const AppDataSource = new DataSource({
  type:  process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3000', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [CharacterEntity, StandEntity],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
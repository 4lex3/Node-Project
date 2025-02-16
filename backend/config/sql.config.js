import { config } from 'dotenv'

config();



export const SQL_CONFIG = {
    SQL_HOST: process.env.SQL_HOST || 'localhost',
    SQL_PORT: process.env.SQL_PORT || 3306,
    SQL_USER: process.env.SQL_USER,
    SQL_PASSWORD: process.env.SQL_PASSWORD,
    SQL_DB: process.env.SQL_DB
};

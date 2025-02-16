import { config } from 'dotenv'

config();

export const MONGO_CONFIG = {
    MONGO_URL: process.env.MONGO_URL,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_COLLECTION: process.env.MONGO_COLLECTION,
};


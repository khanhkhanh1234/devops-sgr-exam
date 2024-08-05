import Dotenv from 'dotenv';

Dotenv.config();

export const config = {
  app: {
    port: Number(process.env.APP_PORT || 3000),
  },
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/sgroup',
  },
};

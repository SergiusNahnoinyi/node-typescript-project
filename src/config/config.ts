import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.SERVER_PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.DB_URL;

export const config = {
  mongo: {
    username: USERNAME,
    password: PASSWORD,
    url: URL,
  },
  server: {
    port: PORT,
  },
};

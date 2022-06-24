import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.SERVER_PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.vmlka.mongodb.net/db-articles`;

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

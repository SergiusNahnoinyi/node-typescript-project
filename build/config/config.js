'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.vmlka.mongodb.net/db-articles`;
exports.config = {
  mongo: {
    username: USERNAME,
    password: PASSWORD,
    url: URL,
  },
  server: {
    port: PORT,
  },
};

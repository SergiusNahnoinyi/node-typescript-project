import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { config } from './config/config';
import router from './routes/articlesRouter';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/articles', router);

mongoose.connect(config.mongo.url)
  .then(() => {
    app.listen(config.server.port, function () {
      console.log(
        `Database connection successfully. Use our API on port: ${config.server.port}`
      );
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit();
  });
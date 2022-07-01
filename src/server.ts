import express, { Express, Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { config } from './config/config';
import router from './routes/articlesRouter';

const app: Express = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api', router);

mongoose
  .connect(config.mongo.url)
  .then(() => {
    app.listen(config.server.port, function () {
      console.log(
        `Database connection successfully. Use our API on port: ${config.server.port}`,
      );
    });
  })
  .catch(err => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });

app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'Error',
    code: 404,
    message: `Use api on routes: 
    GET /api/articles - get articles
    POST /api/articles - create article
    PUT /api/articles/:id - update article
    DELETE /api/articles/:id - delete article`,
    data: 'Not found',
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({
    status: 'Fail',
    code: 500,
    message: err.message,
    data: 'Internal Server Error',
  });
});

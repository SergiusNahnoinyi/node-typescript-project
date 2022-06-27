import express from 'express';

import { getAll, getById, getByTitle, createArticle } from '../controllers/articlesController';
import { validation, schema } from '../middlewares/validationMiddleware';

const router = express.Router();

router.get('/articles', getAll);

router.get('/articles/title', getByTitle);

router.get('/articles/:articleId', getById);

router.post('/articles', validation(schema), createArticle);

export default router;

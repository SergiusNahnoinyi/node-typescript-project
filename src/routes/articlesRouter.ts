import express from 'express';

import { getAll, createArticle } from '../controllers/articlesController';
import { validation, schema } from '../middlewares/validationMiddleware';

const router = express.Router();

router.get('/articles', getAll);

router.post('/articles', validation(schema), createArticle);

export default router;

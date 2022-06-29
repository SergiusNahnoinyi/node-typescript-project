import express from 'express';

import {
  getAll,
  getById,
  getByTitle,
  createArticle,
  updateArticle,
  deleteArticleById,
} from '../controllers/articlesController';

import { validation, schema } from '../middlewares/validationMiddleware';

const router = express.Router();

router.get('/articles', getAll);

router.get('/articles/title', getByTitle);

router.get('/articles/:id', getById);

router.post('/articles', validation(schema), createArticle);

router.put('/articles/:id', validation(schema), updateArticle);

router.delete('/articles/:id', deleteArticleById);

export default router;

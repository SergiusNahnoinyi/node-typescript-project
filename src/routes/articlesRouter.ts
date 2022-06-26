import express from 'express';

import { getAll, createArticle } from '../controllers/articlesController';

const router = express.Router();

router.get('/articles', getAll);

router.post('/articles', createArticle);

export default router;

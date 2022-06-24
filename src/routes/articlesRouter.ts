import express from 'express';

import { getAll } from '../controllers/articlesController';

const router = express.Router();

router.get('/articles', getAll);

export default router;

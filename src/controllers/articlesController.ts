import { RequestHandler } from 'express';

import Article, { IArticle } from '../models/Article';

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.json({ message: 'Success', code: 200, data: { articles } });
  } catch (error) {
    next(error);
  }
};

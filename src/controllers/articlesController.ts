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

export const createArticle: RequestHandler = async (req, res, next) => {
  try {
    const data: IArticle = req.body;
    const article = await Article.create(data);
    res.json({ message: 'Created', code: 201, data: { article } });
  } catch (error) {
    next(error);
  }
};

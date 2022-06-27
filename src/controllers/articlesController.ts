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

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    const article = await Article.findOne({ _id: articleId });
    if (!article) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json({ message: 'Success', code: 200, data: { article } });
  } catch (error) {
    next(error);
  }
};

export const getByTitle: RequestHandler = async (req, res, next) => {
  try {
    const { title } = req.query;
    const article = await Article.find({ title: title });
    if (!article) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json({ message: 'Success', code: 200, data: { article } });
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

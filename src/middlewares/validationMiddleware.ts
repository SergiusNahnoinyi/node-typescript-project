import { Request, Response, NextFunction } from 'express';
import Joi, { ObjectSchema } from 'joi';

import { IArticle } from '../models/Article';

export const validation = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  };
};

export const schema = Joi.object<IArticle>({
  title: Joi.string().min(8).max(100).required(),
  description: Joi.string().min(10).max(100).required(),
  published: Joi.boolean(),
});

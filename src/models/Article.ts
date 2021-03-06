import mongoose from 'mongoose';
import { Model } from 'mongoose';

type ArticleType = IArticle & mongoose.Document;

export interface IArticle {
  title: string;
  description: string;
  published?: boolean;
}

const ArticlesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Article: Model<ArticleType> = mongoose.model<ArticleType>(
  'article',
  ArticlesSchema,
);

export default Article;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArticleById = exports.deleteArticles = exports.updateArticle = exports.createArticle = exports.getByTitle = exports.getById = exports.getAll = void 0;
const Article_1 = __importDefault(require("../models/Article"));
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield Article_1.default.find();
        res.json({ message: 'Success', code: 200, data: { articles } });
    }
    catch (error) {
        next(error);
    }
});
exports.getAll = getAll;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const article = yield Article_1.default.findOne({ _id: id });
        if (!article) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.json({ message: 'Success', code: 200, data: { article } });
    }
    catch (error) {
        next(error);
    }
});
exports.getById = getById;
const getByTitle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.query;
        const article = yield Article_1.default.find({ title: title });
        if (!article) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.json({ message: 'Success', code: 200, data: { article } });
    }
    catch (error) {
        next(error);
    }
});
exports.getByTitle = getByTitle;
const createArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const article = yield Article_1.default.create(data);
        res.json({ message: 'Created', code: 201, data: { article } });
    }
    catch (error) {
        next(error);
    }
});
exports.createArticle = createArticle;
const updateArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const article = yield Article_1.default.findByIdAndUpdate(id, data, { new: true });
        res.json({ message: 'Updated', code: 200, data: { article } });
    }
    catch (error) {
        next(error);
    }
});
exports.updateArticle = updateArticle;
const deleteArticles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield Article_1.default.deleteMany();
        res.json({ message: 'Deleted', code: 200, data: { articles } });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteArticles = deleteArticles;
const deleteArticleById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const article = yield Article_1.default.findByIdAndDelete(id);
        if (!article) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.json({ message: 'Deleted', code: 200, data: { article } });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteArticleById = deleteArticleById;

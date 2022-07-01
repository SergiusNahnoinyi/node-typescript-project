"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articlesController_1 = require("../controllers/articlesController");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const router = express_1.default.Router();
router.get('/articles', articlesController_1.getAll);
router.get('/articles/title', articlesController_1.getByTitle);
router.get('/articles/:id', articlesController_1.getById);
router.post('/articles', (0, validationMiddleware_1.validation)(validationMiddleware_1.schema), articlesController_1.createArticle);
router.put('/articles/:id', (0, validationMiddleware_1.validation)(validationMiddleware_1.schema), articlesController_1.updateArticle);
router.delete('/articles', articlesController_1.deleteArticles);
router.delete('/articles/:id', articlesController_1.deleteArticleById);
exports.default = router;

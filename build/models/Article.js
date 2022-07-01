"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ArticlesSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
const Article = mongoose_1.default.model('article', ArticlesSchema);
exports.default = Article;

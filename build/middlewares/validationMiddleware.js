"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.validation = void 0;
const joi_1 = __importDefault(require("joi"));
const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.message });
        }
        next();
    };
};
exports.validation = validation;
exports.schema = joi_1.default.object({
    title: joi_1.default.string().min(8).max(100).required(),
    description: joi_1.default.string().min(10).max(100).required(),
    published: joi_1.default.boolean(),
});

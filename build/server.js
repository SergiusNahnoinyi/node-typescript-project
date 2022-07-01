"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const articlesRouter_1 = __importDefault(require("./routes/articlesRouter"));
const app = (0, express_1.default)();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', articlesRouter_1.default);
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => {
    app.listen(config_1.config.server.port, function () {
        console.log(`Database connection successfully. Use our API on port: ${config_1.config.server.port}`);
    });
})
    .catch(err => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit();
});
app.use((req, res) => {
    res.status(404).json({
        status: 'Error',
        code: 404,
        message: `Use api on routes: 
    GET /api/articles - get articles
    POST /api/articles - create article
    PUT /api/articles/:id - update article
    DELETE /api/articles/:id - delete article`,
        data: 'Not found',
    });
});
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: 'Fail',
        code: 500,
        message: err.message,
        data: 'Internal Server Error',
    });
});

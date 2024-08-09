"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./utils/database"));
const personalRoutes_1 = __importDefault(require("./routes/personalRoutes"));
const morgan_1 = __importDefault(require("morgan")); // me muestra las peticiones en consola
const cors_1 = __importDefault(require("cors")); // Para que cualquier servidor pueda interactuar
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false })); // reconocer los campos y post de los formularios
// Routes
app.use('/personal', personalRoutes_1.default);
app.use('/events', eventRoutes_1.default);
// Connect to the database
(0, database_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
exports.default = app;

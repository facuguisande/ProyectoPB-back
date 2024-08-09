"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eventRoutes.ts
const express_1 = __importDefault(require("express"));
const eventControler_1 = require("../controllers/eventControler");
const eventRouter = express_1.default.Router();
eventRouter.post('/', eventControler_1.createEvent);
eventRouter.get('/:clientName/:clientSurname', eventControler_1.getEventsByClient);
eventRouter.put('/:id', eventControler_1.updateEvent);
eventRouter.delete('/:id', eventControler_1.deleteEvent);
exports.default = eventRouter;

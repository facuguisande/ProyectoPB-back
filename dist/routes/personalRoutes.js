"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventControler_1 = require("../controllers/eventControler");
const router = express_1.default.Router();
router.get('/', eventControler_1.createEvent);
router.get('/:id', eventControler_1.getEventsByClient);
router.put('/', eventControler_1.updateEvent);
// Agrega más rutas para actualizar y eliminar personal según sea necesario
exports.default = router;

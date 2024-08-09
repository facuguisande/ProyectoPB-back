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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = createEvent;
exports.getEventsByClient = getEventsByClient;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;
const eventModel_1 = require("../models/eventModel");
// Crear un nuevo evento
function createEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newEvent = yield eventModel_1.eventModel.create(req.body);
            res.status(201).json(newEvent);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
}
// Obtener todos los eventos de un cliente
function getEventsByClient(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { clientName, clientSurname } = req.params;
            const events = yield eventModel_1.eventModel.find({ clientName, clientSurname });
            res.status(200).json(events);
        }
        catch (err) {
            res.status(404).json({ message: err.message });
        }
    });
}
// Actualizar un evento
function updateEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const updatedEvent = yield eventModel_1.eventModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedEvent) {
                res.status(404).json({ message: 'Evento no encontrado' });
                return;
            }
            res.status(200).json(updatedEvent);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
}
// Eliminar un evento
function deleteEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const deletedEvent = yield eventModel_1.eventModel.findByIdAndDelete(id);
            if (!deletedEvent) {
                res.status(404).json({ message: 'Evento no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Evento eliminado' });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    });
}

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
exports.createPersonal = exports.getPersonalById = exports.getAllPersonal = void 0;
const personalModel_1 = __importDefault(require("../models/personalModel"));
const getAllPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personal = yield personalModel_1.default.find();
        res.status(200).json(personal);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getAllPersonal = getAllPersonal;
const getPersonalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personal = yield personalModel_1.default.findById(req.params.id);
        if (!personal) {
            res.status(404).json({ message: 'Personal not found' });
            return;
        }
        res.status(200).json(personal);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getPersonalById = getPersonalById;
const createPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personal = new personalModel_1.default(req.body);
        yield personal.save();
        res.status(201).json(personal);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createPersonal = createPersonal;
// Agrega más funciones para actualizar y eliminar personal según sea necesario

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventModel = exports.eventSchema = void 0;
const mongoose_1 = require("mongoose");
const serviceType_1 = require("../enums/serviceType");
exports.eventSchema = new mongoose_1.Schema({
    clientName: {
        type: String,
        required: true,
    },
    clientSurname: {
        type: String,
        required: true,
    },
    clientCI: {
        type: Number,
    },
    servicio: {
        type: String,
        required: true,
        enum: Object.values(serviceType_1.serviceType),
    },
    cel: {
        type: String,
        required: true,
        trime: true,
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    eventLocation: {
        type: String,
        required: false,
    }
});
exports.eventModel = (0, mongoose_1.model)('Event', exports.eventSchema);

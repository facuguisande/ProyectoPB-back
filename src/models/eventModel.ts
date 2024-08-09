import mongoose, { Document, Schema, model } from 'mongoose';
import { serviceType } from '../enums/serviceType';

export interface IEvents extends Document {
    _id?: mongoose.ObjectId;
    clientName: string;
    clientSurname: string;
    clientCI?: number;
    servicio: serviceType | undefined;
    cel: string;
    eventDate: Date;
    eventTime?: number;
    eventLocation: string;
}

export const eventSchema = new Schema({
   
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
        enum: Object.values(serviceType),
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

})


export const eventModel = model<IEvents>('Event', eventSchema)
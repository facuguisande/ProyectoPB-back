import mongoose, {Schema, model} from "mongoose";
// import { IEvents } from "./eventModel";

export interface ICalendar {
    _id: mongoose.Types.ObjectId;
    name?: string,
    events: mongoose.Types.ObjectId[]; // arreglo de eventos
}


export const calendarSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		
		events: {
			type: [mongoose.Types.ObjectId], // list of _.id of events
		}
	},
	{
		timestamps: true,
	}
);





export const calendarModel =model<ICalendar>('Calendar', calendarSchema);
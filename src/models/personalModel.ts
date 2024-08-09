import mongoose, { Document, Schema } from 'mongoose';

export enum Position {
  PARRILLERO = 'parrillero',
  MOZZO = 'mozo'
}

export interface IPersonal extends Document {
  ci: string;
  name: string;
  surname: string;
  position: Position;
  photo?: string;
}

const personalSchema: Schema = new Schema({
  ci: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  position: { type: String, required: true, enum: Object.values(Position) },
  photo: { type: String, required: false }
});

export default mongoose.model<IPersonal>('Personal', personalSchema);
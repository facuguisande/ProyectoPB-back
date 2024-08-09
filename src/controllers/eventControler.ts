import { Request, Response } from 'express';
import { IEvents, eventModel } from  '../models/eventModel';
import { Error } from 'mongoose';
import { error } from 'console';

// Crear un nuevo evento
export async function createEvent(req: Request, res: Response): Promise<void> {
  try {

    const newEvent: IEvents = await eventModel.create(req.body);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
}

// Obtener todos los eventos de un cliente
export async function getEventsByClient(req: Request, res: Response): Promise<void> {
  try {
    const { clientName, clientSurname } = req.params;
    const events = await eventModel.find({ clientName, clientSurname });
    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: (err as Error).message });
  }
}

// Actualizar un evento
export async function updateEvent(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const updatedEvent = await eventModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEvent) {
      res.status(404).json({ message: 'Evento no encontrado' });
      return;
    }
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
}

// Eliminar un evento
export async function deleteEvent(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const deletedEvent = await eventModel.findByIdAndDelete(id);
    if (!deletedEvent) {
      res.status(404).json({ message: 'Evento no encontrado' });
      return;
    }
    res.status(200).json({ message: 'Evento eliminado' });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
}





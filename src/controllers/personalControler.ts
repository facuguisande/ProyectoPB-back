import { Request, Response } from 'express';
import Personal, { IPersonal } from '../models/personalModel';
import { error } from 'console';

export const getAllPersonal = async (req: Request, res: Response): Promise<void> => {
  try {
    const personal: IPersonal[] = await Personal.find();
    res.status(200).json(personal);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getPersonalById = async (req: Request, res: Response): Promise<void> => {
  try {
    const personal: IPersonal | null = await Personal.findById(req.params.id);
    if (!personal) {
      res.status(404).json({ message: 'Personal not found' });
      return;
    }
    res.status(200).json(personal);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const createPersonal = async (req: Request, res: Response): Promise<void> => {
  try {
    const personal: IPersonal = new Personal(req.body);
    await personal.save();
    res.status(201).json(personal);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

// Agrega más funciones para actualizar y eliminar personal según sea necesario
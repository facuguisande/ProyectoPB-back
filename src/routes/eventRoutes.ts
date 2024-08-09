// eventRoutes.ts
import express, { Router } from 'express';
import { createEvent, getEventsByClient, updateEvent, deleteEvent } from '../controllers/eventControler'

const eventRouter: Router = express.Router();

eventRouter.post('/', createEvent);
eventRouter.get('/:clientName/:clientSurname', getEventsByClient);
eventRouter.put('/:id', updateEvent);
eventRouter.delete('/:id', deleteEvent);

export default eventRouter;
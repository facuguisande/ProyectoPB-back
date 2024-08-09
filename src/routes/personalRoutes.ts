import express from 'express';
import { createPersonal, getAllPersonal, getPersonalById } from '../controllers/personalControler';

const router = express.Router();

router.post('/', createPersonal);
router.get('/:id', getPersonalById);  
router.get('/', getAllPersonal);

// Agrega más rutas para actualizar y eliminar personal según sea necesario

export default router;
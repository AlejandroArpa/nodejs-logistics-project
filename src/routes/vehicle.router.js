import { Router } from 'express';
import { createCont, getAllCont, getOneCont } from '../controllers/vehicles.controller.js';

export const vehicleRouter = Router();
vehicleRouter.get('/', getAllCont);
vehicleRouter.get('/:id', getOneCont);
vehicleRouter.post('/', createCont);

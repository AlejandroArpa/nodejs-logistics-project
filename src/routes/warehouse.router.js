import { Router } from 'express';
import { createCont, getAllCont, getOneCont, updateCont } from '../controllers/warehouses.controller.js';

export const warehouseRouter =  Router();

warehouseRouter.get('/', getAllCont);
warehouseRouter.get('/:id', getOneCont);
warehouseRouter.post('/', createCont);
warehouseRouter.put('/:id', updateCont);
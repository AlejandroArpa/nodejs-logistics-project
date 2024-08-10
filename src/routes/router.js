import express from "express";
import { warehouseRouter } from "./warehouse.router.js";
import { shipmentRouter } from "./shipment.router.js";
import { driverRouter } from "./driver.router.js";
import { vehicleRouter } from "./vehicle.router.js";

export const routes = express();

routes.use('/warehouses', warehouseRouter);
routes.use('/drivers', driverRouter);
routes.use('/shipments', shipmentRouter);
routes.use('/vehicles', vehicleRouter);
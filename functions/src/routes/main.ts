import * as express from "express";
import { empresasRouter } from "./empleados";

export let mainRouter = express.Router();

mainRouter.use('/empresas', empresasRouter);

import { Router } from "express";

import dreamRoutes from "./dreams.js";

const apiRouter = Router();

apiRouter.use(dreamRoutes);

export {apiRouter};
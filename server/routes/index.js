import { Router } from "express";

import dreamRoutes from "./dreams.js";
import openaiRoutes from "./openai.js";

const apiRouter = Router();

apiRouter.use(dreamRoutes);
apiRouter.use(openaiRoutes);

export {apiRouter};
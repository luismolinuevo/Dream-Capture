import { Router } from "express";
import * as openaiControllers from "../controllers/openai.js";

const router = Router();

router.post("/createImages", openaiControllers.generateAdvice);

export default router;
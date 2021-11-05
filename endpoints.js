import Router from "express";
import Controllers from "./controllers.js";
const router = Router();
router.get('/post', Controllers.getAll);
router.post('/post', Controllers.add);
export default router;
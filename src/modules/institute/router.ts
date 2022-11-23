import { Router } from "express";
import controller from "./controller";

let router: Router = Router();

router.post('/institute', controller.GET);

export default router;

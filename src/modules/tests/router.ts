import { Router } from "express";
import controller from "./controller"

let router: Router = Router();

router.get('/tests/:faculty_id', controller.GETTESTS);

export default router;
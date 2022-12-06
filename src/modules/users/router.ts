import { Router } from "express";
import controller from "./controller";

let router: Router = Router();

router.get('/users', controller.GET);
router.post('/register', controller.POST);
router.post('/login', controller.LOGIN);

export default router;



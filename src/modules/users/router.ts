import { Router } from "express";
import controller from "./controller";
import cheekToken from "../../middleweire/cheekToken";
import { validation } from "../../middleweire/joiValidation"

let router: Router = Router();

router.get('/users', controller.GET);
router.post('/register', controller.POST);
router.post('/login', controller.LOGIN);

export default router;



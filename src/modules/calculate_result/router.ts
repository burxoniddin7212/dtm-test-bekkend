import { Router } from "express";
import cheekToken from "../../middleweire/cheekToken";
import controller from "./controller";

let router: Router = Router();

router.post('/calculate_result', [cheekToken], controller.CALCULATERESULT);

export default router;

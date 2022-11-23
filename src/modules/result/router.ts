import { Router } from "express";
import cheekToken from "../../middleweire/cheekToken";
import controller from "./controller"

let router: Router = Router();


router.get('/result', controller.GETRESULT);
router.get('/result_user', [cheekToken], controller.GETRESULTBYID);


export default router;



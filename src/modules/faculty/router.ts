import { Router } from "express";
import controller from "./controller";

let router: Router = Router();

router.get('/first_block', controller.FIRSTBLOCK);
router.get('/second_block/:id', controller.SECONDBLOCK);
router.get('/faculty_inst/:institute_id', controller.FORINSTITUTE);
router.get('/faculty/:faculty_id', controller.BYID);

export default router;
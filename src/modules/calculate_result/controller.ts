import { NextFunction, Response } from "express";
import modul from "./modul";
import { InternalServerError } from "../../lib/error";
import { DemoRequest } from "../../middleweire/cheekToken"


let CALCULATERESULT = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let result = await modul.CALCULATERESULT(req.body, req.user_id as string);
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: result
    })
  } catch (error) {
    next(new InternalServerError('internal error'))
  }
}


export default {
  CALCULATERESULT
}

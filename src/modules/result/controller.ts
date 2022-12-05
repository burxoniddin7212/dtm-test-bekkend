import { DemoRequest } from "../../middleweire/cheekToken"
import { BedRequestError } from './../../lib/error';
import { NextFunction, Request, Response } from "express";
import modul from "./model";
import { InternalServerError } from "../../lib/error";


let GETRESULT = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let result = await modul.GETRESULT();
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: result
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}


let GETRESULTBYID = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    
    let result = await modul.GETRESULTBYID(req.user_id as string);
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: result
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}




export default {
  GETRESULT,
  GETRESULTBYID
}

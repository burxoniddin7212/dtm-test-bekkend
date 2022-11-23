
import { BedRequestError } from './../../lib/error';
import { NextFunction, Request, Response } from "express";
import modul from "./modul";
import { InternalServerError } from "../../lib/error";


export interface DemoRequest extends Request {
  user_id?: string
}


let GET = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let institute = await modul.GET(req.body);
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: institute
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}


export default {
  GET
}
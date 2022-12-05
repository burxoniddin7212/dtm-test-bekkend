import { BedRequestError } from './../../lib/error';
import { NextFunction, Request, Response } from "express";
import modul from "./modul";
import { DemoRequest } from "../../middleweire/cheekToken"
import { InternalServerError } from "../../lib/error";




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
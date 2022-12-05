import { BedRequestError } from './../../lib/error';
import { NextFunction, Request, Response } from "express";
import modul from "./modul";
import { DemoRequest } from "../../middleweire/cheekToken"
import { InternalServerError } from "../../lib/error";



let FIRSTBLOCK = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let science = await modul.FIRSTBLOCK();
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: science
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}

let SECONDBLOCK = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.params.id) {
      next(new BedRequestError("bed request"))
    }
    let science = await modul.SECONDBLOCK(req.params.id);
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: science
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}

let FORINSTITUTE = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.params.institute_id) {
      next(new BedRequestError("bed request"))
    }
    let faculty = await modul.FORINSTITUTE(req.params.institute_id);
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: faculty
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}

let BYID = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.params.faculty_id) {
      next(new BedRequestError("bed request"))
    }
    let faculty = await modul.BYID(req.params.faculty_id);
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: faculty
    })
  } catch (error) {
    console.log(error);
    next(new InternalServerError('internal error'))
  }
}


export default {
  FIRSTBLOCK,
  SECONDBLOCK,
  FORINSTITUTE,
  BYID
}
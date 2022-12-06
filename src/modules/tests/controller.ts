import { NextFunction, Response } from "express"
import modul from "./modul"
import { BedRequestError, InternalServerError } from "../../lib/error"
import { DemoRequest } from "../../middleweire/cheekToken"


let GETTESTS = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.params.faculty_id) {
      next(new BedRequestError("bed request"))
    }
    let tests = await modul.GETTESTS(req.params.faculty_id)
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: tests
    })
  } catch (error) {
    next(new InternalServerError('internal error'))
  }
}


export default {
  GETTESTS
}
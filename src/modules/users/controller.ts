import { BedRequestError } from './../../lib/error';
import { NextFunction, Response } from "express";
import modul from "./modul";
import { InternalServerError } from "../../lib/error"
import { DemoRequest } from "../../middleweire/cheekToken"
import jwt from '../../lib/jwt';


export interface userPost {
  full_name: string,
  tell_number: string,
  user_name: string,
  region: string,
  password: string,
  gander: string
}

let GET = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let users = await modul.GET();
    users?.forEach(data => {
      delete data.password;
    });
    return res.status(200).send({
      status: 200,
      message: 'ok',
      data: users
    })
  } catch (error) {
    next(new InternalServerError('internal error'))
  }
}

let POST = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let users = await modul.POST(req.body);
    if (!users) next(new BedRequestError('passwor or full_name unieq'));
    delete users.password;
    return res.status(200).send({
      status: 201,
      message: 'ok',
      data: users,
      token: jwt.sign({ user_id: users.user_id as string })
    })
  } catch (error) {
    next(new InternalServerError('internal error'))
  }
}

let LOGIN = async (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let user = await modul.LOGIN(req.body);
    if (!user) next(new BedRequestError('not found'))
    if (user) {
      delete user?.password;
      return res.status(200).send({
        status: 201,
        message: 'ok',
        data: user,
        token: jwt.sign({ user_id: user?.user_id as string })
      })
    }
  } catch (error) {
    next(new InternalServerError('internal error'))
  }
}


export default {
  GET,
  POST,
  LOGIN
}
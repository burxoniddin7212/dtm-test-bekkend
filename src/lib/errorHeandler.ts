import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import fs from "fs";
import path from "path";

export interface DemoRequest extends Request {
  user_id?: string
}

export interface CustomErrorRequestHandler extends ErrorRequestHandler {
  status: number;
  message?: string;
}

export let heandler = (error: CustomErrorRequestHandler, req: DemoRequest, res: Response, next: NextFunction) => {
  if (error.name == 'InternalServerError') {
    fs.appendFileSync(path.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req?.user_id}`);

    return res.status(500).send({
      status: 500,
      message: error.name
    })
  }

  if (error.name == 'AuthorizatsionError') {
    fs.appendFileSync(path.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req?.user_id}`);

    return res.status(401).send({
      status: 401,
      message: error.message
    })
  }

  if (error.name == 'ForbiddineError') {
    fs.appendFileSync(path.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req?.user_id}`);

    return res.status(403).send({
      status: 403,
      message: error.name
    })
  }

  if (error.name == 'BedRequestError') {
    fs.appendFileSync(path.join(process.cwd(), 'src', 'log.tx'), `${req.url}--${req.method}--${Date.now()}---users-${req?.user_id}`);

    return res.status(400).send({
      status: 400,
      message: error.message
    })
  }

}


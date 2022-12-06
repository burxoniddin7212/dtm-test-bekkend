import { Request, Response, NextFunction } from "express";
import jwt from "../lib/jwt";
import JWT from "jsonwebtoken";
import { ForbiddineError } from "../lib/error";

export interface DemoRequest extends Request {
  user_id?: string
}

let cheekToken = (req: DemoRequest, res: Response, next: NextFunction) => {
  try {
    let { token } = req.headers;
    if (!token) next(new ForbiddineError('token requaried'))
    let { user_id } = jwt.verify(token as string,) as JWT.JwtPayload;
    if (user_id) req.user_id = user_id;
    next();
  } catch (error) {
    next(new ForbiddineError((error as Error).message))
  }
}

export default cheekToken;
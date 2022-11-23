import { AuthorizatsionError, InternalServerError } from './../lib/error';
import { registerSchema, loginSchema, instituteSchema } from './../lib/validation';
import { Request, Response, NextFunction } from "express"

interface DemoRequest extends Request {
  user_id?: string
}

export interface userPost {
  full_name: string,
  tell_number: string,
  user_name: string,
  region: string,
  password: string,
  gander: string
}

export let validation = (req: DemoRequest, res: Response, next: NextFunction) => {
  try {

    if (req.url == '/register' && req.method == 'POST') {
      let { error } = registerSchema.validate(req.body);
      if (error) next(new AuthorizatsionError('avtarization error'));
    }

    if (req.url == '/login' && req.method == 'POST') {
      let { error } = loginSchema.validate(req.body);
      if (error) next(new AuthorizatsionError('avtarization error'));
    }

    if (req.url == '/institute' && req.method == 'POST') {
      let { error } = instituteSchema.validate(req.body);
      if (error) next(new AuthorizatsionError('avtarization error'));
    }

    next();
  } catch (error) {
    next(new InternalServerError('server error'));
  }
}
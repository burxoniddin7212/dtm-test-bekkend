import Joi from 'joi';
import { userPost } from '../middleweire/joiValidation';

export const registerSchema: Joi.ObjectSchema<userPost> = Joi.object({
  full_name: Joi.string().required(),
  user_name: Joi.string().required().min(3).max(20),
  password: Joi.string().required().min(5),
  tell_number: Joi.string().required().min(9),
  region: Joi.string().required(),
  gander: Joi.string().required().valid('male', 'famele'),
}).meta({ className: 'Register' });

export const loginSchema: Joi.ObjectSchema<userPost> = Joi.object({
  user_name: Joi.string().required().min(3).max(20),
  password: Joi.string().required().min(5),
}).meta({ className: 'Login' });

export const instituteSchema: Joi.ObjectSchema<userPost> = Joi.object({
  first_block: Joi.string().required(),
  second_block: Joi.string().required(),
}).meta({ className: 'Institute' });






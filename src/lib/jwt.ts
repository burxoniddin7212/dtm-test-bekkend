import jwt from "jsonwebtoken";
const secret: string = "real";


export default {
  sign: (peyload: {}) => jwt.sign(peyload, secret),
  verify: (payload: string) => jwt.verify(payload, secret)
}
import sha256 from 'sha256';
import query from "./query";
import { fetch, fetchAll } from "../../lib/postgres"


interface userPost {
  full_name: string,
  tell_number: string,
  user_name: string,
  region: string,
  password: string,
  gander: string
}

interface userLogin {
  user_name: string,
  password: string
}

let GET = async () => {
  let users = await fetchAll(query.GET as ``);
  return users
}

let POST = async (data: userPost) => {
  let users1 = await fetchAll(query.GET as ``);
  let user = await users1?.find(data1 => data1.password == sha256(data.password) && data1.full_name == data.full_name);
  if (user) return false
  

  data.password = sha256(data.password);
  let users = await fetch(query.POST as ``, [data.full_name, data.user_name, data.password, data.tell_number, data.region, data.gander]);
  return users
}

let LOGIN = async (data: userLogin) => {
  data.password = sha256(data.password);
  let users = await fetch(query.LOGIN as ``, [data.user_name, data.password]);
  return users
}


export default {
  GET,
  POST,
  LOGIN
}
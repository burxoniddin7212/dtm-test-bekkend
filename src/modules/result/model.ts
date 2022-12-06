import query from "./query";
import { fetch, fetchAll } from "../../lib/postgres";

interface InsertResult {
  user_id: string,
  institue_id: string,
  faculty_id: string,
  first_block_mark: string,
  second_block_mark: string,
  result_user: string
}

let GETBUDJET = async () => {
  let result = await fetchAll(query.GETBUDJET as ``)
  return result
}

let GETCONTRAKT = async () => {
  let result = await fetchAll(query.GETCONTRAKT as ``)
  return result
}

let INSERTRESULT = async (data: InsertResult) => {
  let result = await fetch(query.INSERTRESULT as ``, [data.user_id, data.institue_id, data.faculty_id, data.first_block_mark, data.second_block_mark, data.result_user])
  return result
}

let UPDATERESULT = async (result_id: string) => {
  let result = await fetch(query.UPDATERESULT as ``, [result_id]) || [];
  return result
}

let UPDATERESULTT = async (result_id: string) => {
  let result = await fetch(query.UPDATERESULTT as ``, [result_id])
  return result
}

let GETRESULT = async () => {
  let result = await fetchAll(query.GETRESULT as ``) || [{}];
  result?.forEach(data => {
    data.total_score = +(data.first_block_ball) + (+data.second_block_ball);
  });
  result?.sort(function (x, y) {
    return x.total_score - y.total_score;
  });
  return result?.reverse()
}

let GETRESULTBYID = async (user_id: string) => {
  let result = await fetchAll(query.GETRESULTBYID as ``, [user_id]);
  return result?.reverse()
}


export default {
  GETBUDJET,
  GETCONTRAKT,
  INSERTRESULT,
  UPDATERESULT,
  UPDATERESULTT,
  GETRESULT,
  GETRESULTBYID
}
import query from "./query";
import { fetch, fetchAll } from "../../lib/postgres"





let FIRSTBLOCK = async () => {
  let science = await fetchAll(query.FIRSTBLOCK as ``);

  return science
}

let SECONDBLOCK = async (id:string) => {
  let science = await fetchAll(query.SECONDBLOCK as ``,[id]);
  
  return science
}

let FORINSTITUTE = async (id:string) => {
  let faculty = await fetchAll(query.FORINSTITUTE as ``,[id]);
  
  return faculty
}

let BYID = async (id:string) => {
  let faculty = await fetch(query.BYID as ``,[id]);
  
  return faculty
}



export default {
  FIRSTBLOCK,
  SECONDBLOCK,
  FORINSTITUTE,
  BYID
}
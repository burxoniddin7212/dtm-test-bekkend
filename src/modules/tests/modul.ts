import query from "./query";
import { fetch, fetchAll } from "../../lib/postgres"





let GETTESTS = async (faculty_id: string) => {
  let tests = await fetchAll(query.GETTESTS as ``, [faculty_id]);

  return tests
}



export default {
  GETTESTS
}
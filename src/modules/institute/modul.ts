import query from "./query";
import { fetch, fetchAll } from "../../lib/postgres"





let GET = async ({ first_block, second_block }: { first_block: string, second_block: string }) => {
  let institute = await fetchAll(query.GET as ``, [first_block, second_block]);
  
  return institute
}



export default {
  GET
}
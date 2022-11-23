"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let GET = `
select 
  distinct i.institute_id,
  i.*
from
  faculty as f
  join institute as i
    on
      f.first_block=$1 
    and 
      f.second_block=$2
    and
      f.institute_id=i.institute_id
`;
exports.default = {
    GET
};

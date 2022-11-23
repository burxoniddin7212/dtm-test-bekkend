

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



export default {
  GET
}
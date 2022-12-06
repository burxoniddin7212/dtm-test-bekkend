

let GETTESTS = `
select
  t.test_id,
  t.science_id,
  t.test_answer,
  f.faculty_id,
  f.first_block,
  f.second_block,
  f.institute_id
from 
faculty as f
  join tests as t
    on
      f.faculty_id=$1
      and (
        f.first_block=t.science_id or f.second_block=t.science_id
      )
`;

let RESULTS = `
  select 
  *
  from
  result
  where faculty_id=$1
`;

let FACINS = `
select 
f.name as faculty,
i.name as institute
from
  faculty as f
    join institute as i
      on
        f.faculty_id=$1
      and
        f.institute_id=i.institute_id  
`;


export default {
  GETTESTS,
  RESULTS,
  FACINS
}
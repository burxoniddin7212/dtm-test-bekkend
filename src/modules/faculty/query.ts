
let FIRSTBLOCK = `
  select
  distinct science.science_id,
  science.*
  from
  faculty
  join science on faculty.first_block = science.science_id and science.status = 'acrive'
`;

let SECONDBLOCK = `
select
  distinct science.science_id,
  science.*
from
  faculty
join science 
  on 
    faculty.first_block = $1
  and
    faculty.second_block = science.science_id 
  and 
    science.status = 'acrive' 
`;

let FORINSTITUTE = `
select 
distinct f.faculty_id,
f.*
from
faculty as f
where institute_id=$1
`;

let BYID = `
select 
*
from
faculty
where faculty_id=$1
`;





export default {
  FIRSTBLOCK,
  SECONDBLOCK,
  FORINSTITUTE,
  BYID
}
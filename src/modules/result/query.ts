

let GETBUDJET = `
select 
*
from
result
where result_user='byudjet'
`;

let GETCONTRAKT = `
select 
*
from
result
where result_user='kantrakt'
`;

let INSERTRESULT = `
INSERT INTO result(user_id,institute_id,faculty_id,first_block_ball,second_block_ball,result_user) values (CAST($1 as INTEGER),CAST($2 as INTEGER),CAST($3 as INTEGER),$4,$5,$6) RETURNING*
`;

let UPDATERESULT = `
UPDATE result
  set
    result_user='kantrakt'
  where
    result_id=CAST($1 as INTEGER)
RETURNING*
`;

let UPDATERESULTT = `
UPDATE result
  set
    result_user='kantrakt'
  where
    result_id=CAST($1 as INTEGER)
RETURNING*
`;

let GETRESULT = `
select
*
from 
result
`;

let GETRESULTBYID = `
select
*
from 
result
  where
    user_id=$1
`;




export default {
  GETBUDJET,
  GETCONTRAKT,
  INSERTRESULT,
  UPDATERESULT,
  UPDATERESULTT,
  GETRESULT,
  GETRESULTBYID
}
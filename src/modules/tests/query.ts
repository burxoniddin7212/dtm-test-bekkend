let GETTESTS = `
select
json_agg(
  to_jsonb(t) - 'test_answer' - 'created_at' - 'status' - 'science_id'
) AS tests
from 
faculty as f
  join tests as t
    on
      f.faculty_id=$1
      and (
        f.first_block=t.science_id or f.second_block=t.science_id
      )
  group by t.science_id
`;


export default {
  GETTESTS
}
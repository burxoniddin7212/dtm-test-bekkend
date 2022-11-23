import query from "./query";
import modulFaculty from "../faculty/modul";
import modulResult from "../result/model";
import { fetch, fetchAll } from "../../lib/postgres";

interface Calculate {
  faculty_id: string,
  tests: { test_id: string, test_answer: string }[]
}


let CALCULATERESULT = async (data: Calculate, user_id: string) => {
  let first_block = 0;
  let second_block = 0;
  let first_block_mark = 0;
  let second_block_mark = 0;
  let result = await fetchAll(query.GETTESTS as ``, [data.faculty_id]);

  data?.tests.forEach(info => {
    result?.forEach((test => {
      if (info.test_id as string == test.test_id as string) {
        if (info.test_answer == test.test_answer) {
          test.first_block == test.science_id ? first_block++ : second_block++
        }
      }
    }))
  })
  first_block_mark = 3.1 * first_block;
  second_block_mark = 2.1 * second_block;
  first_block_mark ? first_block_mark : first_block_mark = 0;
  second_block_mark ? second_block_mark : second_block_mark = 0;

  let faculty = await modulFaculty.BYID(data.faculty_id);
  let byudjet = await modulResult.GETBUDJET() || [];
  let contrakt = await modulResult.GETCONTRAKT();

  byudjet.forEach(data => {
    data.total_score = +(data.first_block_ball) + (+data.second_block_ball);
  });


  if ((faculty.grands as number) > (byudjet?.length)) {
    let inserData = await modulResult.INSERTRESULT({
      user_id: user_id,
      institue_id: faculty.institue_id || "1",
      faculty_id: faculty.faculty_id || "3",
      first_block_mark: first_block_mark as any || "0",
      second_block_mark: second_block_mark as any || "0",
      result_user: "byudjet"
    });
    let insFac = await fetch(query.FACINS as ``, [data.faculty_id]);

    return ({
      first_block, second_block,
      data: insFac,
      result: "byudjet"
    })
  } else {
    const closest = byudjet.reduce(
      (acc, loc) =>
        acc.total_score < loc.total_score
          ? acc
          : loc
    );
    if (closest.total_score < (+(first_block_mark) + (+second_block_mark))) {
      let inserData = await modulResult.INSERTRESULT({
        user_id: user_id || "1",
        institue_id: faculty.institue_id || "1",
        faculty_id: faculty.faculty_id || "3",
        first_block_mark: first_block_mark as any || "0",
        second_block_mark: second_block_mark as any || "0",
        result_user: "byudjet"
      });
      let resultUpdate = await modulResult.UPDATERESULT(closest.result_id as string);
      let insFac = await fetch(query.FACINS as ``, [data.faculty_id]);

      return ({
        first_block, second_block,
        data: insFac,
        result: "byudjet"
      })
    } else {
      let contrakt = await modulResult.GETCONTRAKT() || [];
      if ((faculty.contracts as number) <= contrakt.length) {
        const closest1 = contrakt.reduce(
          (acc, loc) =>
            acc.total_score < loc.total_score
              ? acc
              : loc
        );
        if (closest1.total_score >= (+(first_block_mark) + (+second_block_mark))) {
          let inserData = await modulResult.INSERTRESULT({
            user_id: user_id || "1",
            institue_id: faculty.institue_id || "1",
            faculty_id: faculty.faculty_id || "3",
            first_block_mark: first_block_mark as any || "0",
            second_block_mark: second_block_mark as any || "0",
            result_user: "tavsiya etilmadi"
          });
          let insFac = await fetch(query.FACINS as ``, [data.faculty_id]);

          return ({
            first_block, second_block,
            data: insFac,
            result: "tavsiya etilmadi"
          })
        } else {
          let inserData = await modulResult.INSERTRESULT({
            user_id: user_id || "1",
            institue_id: faculty.institue_id || "1",
            faculty_id: faculty.faculty_id || "3",
            first_block_mark: first_block_mark as any || "0",
            second_block_mark: second_block_mark as any || "0",
            result_user: "kantrakt"
          });
          const closest2 = contrakt.reduce(
            (acc, loc) =>
              acc.total_score < loc.total_score
                ? acc
                : loc
          );
          let updateRezultT = await modulResult.UPDATERESULTT(closest2.result_id as string);
          let insFac = await fetch(query.FACINS as ``, [data.faculty_id]);

          return ({
            first_block, second_block,
            data: insFac,
            result: "kantrakt"
          })
        }
      } else {
        let inserData = await modulResult.INSERTRESULT({
          user_id: user_id || "1",
          institue_id: faculty.institue_id || "1",
          faculty_id: faculty.faculty_id || "3",
          first_block_mark: first_block_mark as any || "0",
          second_block_mark: second_block_mark as any || "0",
          result_user: "kantrakt"
        });
        let insFac = await fetch(query.FACINS as ``, [data.faculty_id]);

        return ({
          first_block, second_block,
          data: insFac,
          result: "kantrakt"
        })
      }
    }
  }
}




export default {
  CALCULATERESULT
}
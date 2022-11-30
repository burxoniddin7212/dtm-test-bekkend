import pg, { Query } from "pg";

console.log("deb commection");

const pool = new pg.Pool({
  user: 'burxoniddin',
  host: 'localhost',
  database: 'dtm_test',
  password: '7212'
});


async function fetchAll(SQL: ``, params: string[] = []) {

  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows
  } catch (error) {
    console.log(error);
  }
  finally {
    client.release();
  }
}

async function fetch(SQL: ``, params: string[] = []) {
  const client = await pool.connect();
  try {
    const { rows: [row] } = await client.query(SQL, params);

    return row
  } catch (error) {
    console.log(error);
  }
  finally {
    client.release();
  }
}
console.log("deb commection");




export {
  fetchAll,
  fetch
}
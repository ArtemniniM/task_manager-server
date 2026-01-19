const pool = require("./db.js");

async function getDataDB() {
  const connection = await pool.connect();
  const sql = "SELECT * FROM users";
  const result = await connection.query(sql);
  return result.rows;
}

async function getDataByIdDB(id) {
  const connection = await pool.connect();
  const sql = "SELECT * FROM users WHERE id = $1";
  const result = await connection.query(sql, [id]);
  return result.rows;
}

async function updateByIdDB(id, name, surname, email, pwd) {
  const connection = await pool.connect();
  const sql = "UPDATE users SET name = $2,surname = $3,email = $4,pwd = $5 WHERE id = $1 RETURNING *";
  const result = await connection.query(sql, [id, name, surname, email, pwd]);
  return result.rows;
}

async function deleteByIdDB(id) {
  const connection = await pool.connect();
  const sql = "DELETE FROM users WHERE id = $1 RETURNING *";
  const result = await connection.query(sql, [id]);
  return result.rows;
}

async function patchByIdDB(id, data) {
  const connection = await pool.connect();
  const sql = "SELECT * from users WHERE id = $1";
  const result1 = await connection.query(sql, [id]);

  const object = { ...result1.rows[0], ...data };
  const sql2 = "UPDATE users SET name = $1 ,surname = $2, email = $3,pwd = $4 where id = $5  RETURNING *";
  const result2 = await connection.query(sql2, [object.name, object.surname, object.email, object.pwd, object.id]);
  return result2.rows;
}

module.exports = { getDataDB, getDataByIdDB, updateByIdDB, deleteByIdDB, patchByIdDB };

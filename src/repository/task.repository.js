const pool = require("./db.js");

async function getAllTaskDB() {
  const connection = await pool.connect();
  const sql = "SELECT * FROM tasks ";
  const result = await connection.query(sql);
  return result.rows;
}

async function getByIdTaskDB(id) {
  const connection = await pool.connect();
  const sql = "SELECT * FROM tasks WHERE id = $1";
  const result = await connection.query(sql, [id]);
  return result.rows;
}

async function addTaskDB(task, user_id) {
  const connection = await pool.connect();
  const sql = "INSERT INTO tasks (task,user_id) VALUES ($1,$2) RETURNING *";
  const result = await connection.query(sql, [task, user_id]);
  return result.rows;
}

async function updateByIdTaskDB(task, user_id, id) {
  const connection = await pool.connect();
  const sql = ` UPDATE tasks SET task = $1, user_id = $2 WHERE id = $3 RETURNING *; `;
  const result = await connection.query(sql, [task, user_id, id]);
  return result.rows;
}

async function deleteByIdTaskDB(id) {
  const connection = await pool.connect();
  const sql = "DELETE FROM tasks WHERE id = $1";
  const result = await connection.query(sql, [id]);
  return result.rows;
}

async function patchByIdTaskDB(id, data) {
  const connection = await pool.connect();
  const sql = "SELECT * FROM tasks WHERE id = $1";
  const result1 = await connection.query(sql, [id]);

  const object = { ...result1.rows[0], ...data };
  const sql2 = `UPDATE tasks SET task = $1, user_id = $2 WHERE id = $3 RETURNING *`;
  const result2 = await connection.query(sql2, [object.task, object.user_id, object.id]);
  return result2.rows;
}

module.exports = { addTaskDB, getAllTaskDB, getByIdTaskDB, updateByIdTaskDB, deleteByIdTaskDB, patchByIdTaskDB };

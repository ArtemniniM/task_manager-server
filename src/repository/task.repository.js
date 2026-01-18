const pool = require("./db.js");

async function addTaskDB(task, user_id) {
  const connection = await pool.connect();
  const sql = "INSERT INTO tasks (task,user_id) VALUES ($1,$2) returning *";
  const result = await connection.query(sql, [task, user_id]);
  return result.rows;
}

module.exports = { addTaskDB };

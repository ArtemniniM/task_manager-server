const pool = require("./db.js");

async function addElementsDB(name, surname, email, pwd) {
  const connection = await pool.connect();
  const sql = "INSERT INTO users (name, surname, email, pwd) VALUES ($1,$2,$3,$4) RETURNING *";
  const result = await connection.query(sql, [name, surname, email, pwd]);
  return result.rows;
}

async function authUserDB(email, pwd) {
  const connection = await pool.connect();
  const sql = "SELECT * FROM users WHERE email = $1 AND pwd = $2";
  const result = await connection.query(sql, [email, pwd]);
  return result.rows;
}

module.exports = { addElementsDB, authUserDB };

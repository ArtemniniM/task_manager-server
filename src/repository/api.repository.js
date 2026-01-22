const pool = require('./db.js');

async function addElementsDB(name, surname, email, pwd) {
  const connection = await pool.connect();
  try {
    await connection.query('BEGIN');

    const sql = 'INSERT INTO users (name, surname, email, pwd) VALUES ($1,$2,$3,$4) RETURNING *';
    const result = await connection.query(sql, [name, surname, email, pwd]);

    await connection.query('COMMIT');

    return result.rows;
  } catch (error) {
    await connection.query('ROLLBACK');

    throw new Error(error.message);
  }
}

async function getUserByEmailDB(email) {
  const connection = await pool.connect();
  const emailSql = 'SELECT * FROM users WHERE email = $1';
  const result = await connection.query(emailSql, [email]);
  return result.rows;
}

async function authUserDB(email, pwd) {
  const connection = await pool.connect();
  const sql = 'SELECT * FROM users WHERE email = $1 AND pwd = $2';
  const result = await connection.query(sql, [email, pwd]);
  return result.rows;
}

module.exports = { addElementsDB, authUserDB, getUserByEmailDB };

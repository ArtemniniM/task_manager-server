const pool = require('./db.js');

async function getDataDB() {
  const connection = await pool.connect();
  const sql = 'SELECT * FROM users';
  const result = await connection.query(sql);
  return result.rows;
}

async function getDataByIdDB(id) {
  const connection = await pool.connect();
  const sql = 'SELECT * FROM users WHERE id = $1';
  const result = await connection.query(sql, [id]);
  return result.rows;
}

async function updateByIdDB(id, name, surname, email, pwd) {
  const connection = await pool.connect();
  try {
    await connection.query('BEGIN');

    const sql = 'UPDATE users SET name = $2,surname = $3,email = $4,pwd = $5 WHERE id = $1 RETURNING *';
    const result = await connection.query(sql, [id, name, surname, email, pwd]);

    await connection.query('COMMIT');

    return result.rows;
  } catch (error) {
    await connection.query('ROLLBACK');

    throw new Error(error.message);
  }
}

async function deleteByIdDB(id) {
  const connection = await pool.connect();
  try {
    connection.query('BEGIN');

    const sql = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const result = await connection.query(sql, [id]);

    connection.query('COMMIT');

    return result.rows;
  } catch (error) {
    connection.query('ROLLBACK');

    throw new Error(error.message);
  }
}

async function patchByIdDB(id, data) {
  const connection = await pool.connect();
  try {
    connection.query('BEGIN');

    const sql = 'SELECT * from users WHERE id = $1';
    const result1 = await connection.query(sql, [id]);

    const object = { ...result1.rows[0], ...data };
    const sql2 = 'UPDATE users SET name = $1 ,surname = $2, email = $3,pwd = $4 where id = $5  RETURNING *';
    const result2 = await connection.query(sql2, [object.name, object.surname, object.email, object.pwd, object.id]);

    connection.query('COMMIT');

    return result2.rows;
  } catch (error) {
    connection.query('ROLLBACK');

    throw new Error(error.message);
  }
}

module.exports = { getDataDB, getDataByIdDB, updateByIdDB, deleteByIdDB, patchByIdDB };

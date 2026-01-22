const { getDataDB, getDataByIdDB, updateByIdDB, deleteByIdDB, patchByIdDB } = require('../repository/user.repository');

async function getData() {
  const result = await getDataDB();

  if (!result.length) throw new Error('NotFoundError');

  return result;
}
async function getDataById(id) {
  const result = await getDataByIdDB(id);

  if (!result.length) throw new Error('NotFoundError');

  return result;
}

async function updateById(id, name, surname, email, pwd) {
  const result = await updateByIdDB(id, name, surname, email, pwd);

  if (!result.length) throw new Error('NotFoundError');

  return result;
}
async function deleteById(id) {
  const result = await deleteByIdDB(id);

  if (!result.length) throw new Error('NotFoundError');

  return result;
}
async function patchById(id, data) {
  const result = await patchByIdDB(id, data);

  if (!result.length) throw new Error('NotFoundError');

  return result;
}

module.exports = { getData, getDataById, updateById, deleteById, patchById };

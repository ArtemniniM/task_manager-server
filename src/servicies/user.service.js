const {
  getDataDB,
  getDataByIdDB,
  updateByIdDB,
  deleteByIdDB,
} = require("../repository/user.repository");

async function getData() {
  const result = await getDataDB();
  return result;
}
async function getDataById(id) {
  const result = await getDataByIdDB(id);
  return result;
}

async function updateById(id, name, surname, email, pwd) {
  const result = await updateByIdDB(id, name, surname, email, pwd);
  return result;
}
async function deleteById(id) {
  const result = await deleteByIdDB(id);
  return result;
}

module.exports = { getData, getDataById, updateById, deleteById };

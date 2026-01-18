const { addElementsDB, authUserDB } = require("../repository/api.repository");

async function addElements(name, surname, email, pwd) {
  const result = await addElementsDB(name, surname, email, pwd);
  return result;
}
async function authUser(email, pwd) {
  const result = await authUserDB(email, pwd);
  console.log(result);
  if (!result.length) {
    throw new Error("Invalid data");
  }
  return result;
}

module.exports = { addElements, authUser };

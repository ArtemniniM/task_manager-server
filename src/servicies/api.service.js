const { addElementsDB, authUserDB, getUserByEmailDB } = require("../repository/api.repository");

async function addElements(name, surname, email, pwd) {
  const result = await addElementsDB(name, surname, email, pwd);

  if (!result.length) throw new Error("ApiValidationError");

  return result;
}
async function authUser(email, pwd) {
  const result = await getUserByEmailDB(email);

  if (!result.length) throw new Error("This Email Not Found");

  if (result[0].pwd != pwd) throw new Error("Invalid Password");

  return result;
}

module.exports = { addElements, authUser };

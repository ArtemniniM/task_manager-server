function checkTaskId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id can not be letter');
  if (id < 0) throw new Error('id should be positive');
  next();
}
function checkTaskBody(req, res, next) {
  const { task, user_id } = req.body;
  if (isNaN(user_id)) throw new Error('user_id can not be letter');
  if (!isNaN(task)) throw new Error('user_id can not be number');
  next();
}
function checkUserId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id can not be letter');
  if (id < 0) throw new Error('id should be positive');
  next();
}
function checkUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;
  if (!isNaN(name)) throw new Error('name can not be number');
  if (!isNaN(surname)) throw new Error('surname can not be number');
  if (!/^[a-zA-Z0-9\-\_\.]+@[a-z]+\.[a-z]+$/gm.test(email)) throw Error('Invalid email');
  if (pwd.length < 8) throw Error('password length < 8 symbols');
  next();
}

module.exports = { checkTaskBody, checkTaskId, checkUserId, checkUserBody };

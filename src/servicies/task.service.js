const { addTaskDB } = require("../repository/task.repository");

async function addTask(task, user_id) {
  const result = await addTaskDB(task, user_id);
  return result;
}

module.exports = { addTask };

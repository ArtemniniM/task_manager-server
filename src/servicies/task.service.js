const {
  addTaskDB,
  getAllTaskDB,
  getByIdTaskDB,
  updateByIdTaskDB,
  deleteByIdTaskDB,
  patchByIdTaskDB,
} = require("../repository/task.repository");

async function getAllTask() {
  const result = await getAllTaskDB();

  if (!result.length) throw new Error("TaskNotFoundError");

  return result;
}

async function getByIdTask(id) {
  const result = await getByIdTaskDB(id);

  if (!result.length) throw new Error("TaskNotFoundError");

  return result;
}

async function addTask(task, user_id) {
  const result = await addTaskDB(task, user_id);

  if (!result.length) throw new Error("TaskNotFoundError");

  return result;
}

async function updateByIdTask(task, user_id, id) {
  const result = await updateByIdTaskDB(task, user_id, id);

  if (!result.length) throw new Error("TaskNotFoundError");

  return result;
}

async function deleteByIdTask(id) {
  const result = await deleteByIdTaskDB(id);

  if (!result.length) throw new Error("TaskNotFoundError");

  return result;
}

async function patchByIdTask(id, data) {
  const result = await patchByIdTaskDB(id, data);

  if (!result.length) throw new Error("TaskNotFoundError");

  return result;
}

module.exports = { addTask, getAllTask, getByIdTask, updateByIdTask, deleteByIdTask, patchByIdTask };

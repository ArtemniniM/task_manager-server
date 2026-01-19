const express = require("express");
const router = express.Router();

const {
  addTask,
  getAllTask,
  getByIdTask,
  updateByIdTask,
  deleteByIdTask,
  patchByIdTask,
} = require("../servicies/task.service");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getAllTask());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await getByIdTask(id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { task, user_id } = req.body;
    res.status(200).send(await addTask(task, user_id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { task, user_id } = req.body;
    res.status(200).send(await updateByIdTask(task, user_id, id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await deleteByIdTask(id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    res.status(200).send(await patchByIdTask(id, data));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;

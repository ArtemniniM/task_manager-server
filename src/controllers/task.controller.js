const express = require("express");
const router = express.Router();

const { addTask } = require("../servicies/task.service");

router.post("/", async (req, res) => {
  try {
    const { task, user_id } = req.body;
    res.status(200).send(await addTask(task, user_id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;

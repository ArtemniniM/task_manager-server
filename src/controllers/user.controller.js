const express = require("express");
const router = express.Router();

const { getData, getDataById, updateById, deleteById, patchById } = require("../servicies/user.service.js");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getData());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await getDataById(id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    res.status(200).send(await updateById(id, name, surname, email, pwd));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await deleteById(id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    res.status(200).send(await patchById(id, data));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;

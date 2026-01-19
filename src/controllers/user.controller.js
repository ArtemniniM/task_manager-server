const express = require("express");
const { getData, getDataById, updateById, deleteById, patchById } = require("../servicies/user.service.js");
const { checkUserId, checkUserBody } = require("../helper/middleware.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await getData());
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.get("/:id", checkUserId, async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await getDataById(id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.put("/:id", checkUserId, checkUserBody, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    res.status(200).send(await updateById(id, name, surname, email, pwd));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.delete("/:id", checkUserId, async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(await deleteById(id));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.patch("/:id", checkUserId, checkUserId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    res.status(200).send(await patchById(id, data));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { addElements, authUser } = require("../servicies/api.service");

router.post("/reg", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    res.status(200).send(await addElements(name, surname, email, pwd));
  } catch (e) {
    res.status(404).send(e.message);
  }
});
router.post("/auth", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    res.status(200).send(await authUser(email, pwd));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;

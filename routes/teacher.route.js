const express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ title: "O'qituvchilar ro'yxati" });
});
router.post("/", (req, res, next) => {
  res.status(200).json({ title: "O'qituvchi qosjhildi" });
});
router.put("/:id", (req, res, next) => {
  res.status(200).json({ title: "O'qituvchi" });
});
module.exports = router;

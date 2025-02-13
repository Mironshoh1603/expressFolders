const express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ title: "Guruhlar ro'yxati" });
});
router.post("/", (req, res, next) => {
  res.status(200).json({ title: "Guruh qosjhildi" });
});
router.put("/:id", (req, res, next) => {
  res.status(200).json({ title: "Guruh" });
});
module.exports = router;

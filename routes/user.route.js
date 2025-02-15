// Administrator
const express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller.js");

router.use((req, res, next) => {
  console.log("Userlar middleware", req.method);
  next();
});
router.get(
  "/",

  userController.getAllUsers
);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);

module.exports = router;

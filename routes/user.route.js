// Administrator
const express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller.js");

router.get("/", userController.getAllUsers);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);

module.exports = router;

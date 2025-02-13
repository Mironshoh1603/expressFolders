// affisant
let userService = require("../service/user.service");
let getAllUsers = (req, res, next) => {
  let users = userService.find();
  res.status(200).json({ title: "O'quvchilar ro'yxati", users });
};

let addUser = (req, res, next) => {
  let body = req.body;
  console.log(body);
  if (!body.name || !body.lastname) throw new Error("Ma'lumotlar to'liq emas");
  let data = userService.addUser(body);
  res.status(200).json({ title: "O'quvchi qosjhildi", data });
};

let updateUser = (req, res, next) => {
  res.status(200).json({ title: "O'quvch" });
};
module.exports = { getAllUsers, addUser, updateUser };

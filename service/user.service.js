// oshpaz
const fs = require("fs");
let find = () => {
  let users = JSON.parse(fs.readFileSync("./config/user.json", "utf-8"));
  return users;
};

const addUser = (user) => {
  try {
    let users = find();
    user = { id: Math.floor(Math.random() * 100), ...user };
    users.push(user);
    fs.writeFileSync("./config/user.json", JSON.stringify(users), "utf-8");
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { find, addUser };

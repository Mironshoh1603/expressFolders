require("dotenv").config();
const express = require("express");
const morgana = require("morgan");
const cors = require("cors");
// routers
const userRouter = require("./routes/user.route.js");
const teacherRouter = require("./routes/teacher.route.js");
const groupRouter = require("./routes/group.route.js");

let app = express();

app.use(
  "/",
  (req, res, next) => {
    console.log(req.method);
    next();
  },
  express.static("./public")
);
app.use(express.json()); // body o'qish
app.use(morgana("dev"));

app.use("/user", userRouter);
app.use("/teacher", teacherRouter);
app.use("/group", groupRouter);

app.listen(process.env.PORT);

require("./db/mongoose");

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/", taskRouter);
app.use("/api/", userRouter);

module.exports = app;

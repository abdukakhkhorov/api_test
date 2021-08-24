const express = require("express");
const userRouter = require("./routes/user.routes");

//-Config
const config = require("./config.json");

const app = express();
app.use(express.json());

//
app.use("/api", userRouter);

//-PORT
app.listen(config.app.port, () =>
  console.log(`Listening ${config.app.port} port...`)
);

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Routes

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE IS CONNECTED!").catch((err) => console.log(err));
  });

app.listen(8080, () => {
  console.log("Sever is running on 3000.");
});

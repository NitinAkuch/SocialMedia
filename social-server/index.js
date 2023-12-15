const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const testRoute = require("./routes/test");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE IS CONNECTED!");
  })
  .catch((err) => console.log(err));

//middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api", testRoute);

app.listen(5000, () => {
  console.log("Server is running on 5000.");
});

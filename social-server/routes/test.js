const Test = require("../models/Test");

const router = require("express").Router();

router.post("/test", async (req, res) => {
  try {
    const newTest = new Test({
      username: req.body.username,
      password: req.body.password,
    });

    const test = await newTest.save();
    res.status(200).json(test);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

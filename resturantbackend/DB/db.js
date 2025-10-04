require("dotenv").config();
const mongoose = require("mongoose");

// ✅ Correct variable name (process.env, not env)
const url = process.env.URL;
mongoose.connect(url)
  .then(() => {
    console.log(" Database connection successful");
  })
  .catch((err) => {
    console.error(" Error occurred: " + err);
  });
module.exports = mongoose;

const mongoose = require("mongoose");
//environment variables
require("dotenv").config({ path: "./.env" });

const uri = process.env.ATLAS_URL;
const connectDB = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("database connected");
    }
  );
};

module.exports = connectDB;

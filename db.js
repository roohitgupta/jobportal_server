const mongoose = require('mongoose')
require("dotenv").config()


const connection = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB connection Successfull!!"))
  .catch((error) => console.log(error));


  module.exports = connection;
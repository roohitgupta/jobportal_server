const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());













app.listen(5000, ()=> {
    console.log("Server Has Started at Port 5000.")
});
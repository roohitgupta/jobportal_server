const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { CreateJobPost, GetJobPost } = require("./controller/controller");


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const JobRoute = express.Router();


app.use('/api', JobRoute);

JobRoute.post("/jobpost", CreateJobPost);
JobRoute.get("/jobpost", GetJobPost);






mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB connection Successfull!!"))
  .catch((error) => console.log(error));


app.listen(5000, ()=> {
    console.log("Server Has Started at Port 5000.")
});
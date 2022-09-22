const express = require("express");
const { connection } = require("./db")
// const mongoose = require('mongoose')
const cors = require("cors");
const dotenv = require("dotenv");
const { CreateJobPost, GetJobPost, CreateApplyPost } = require("./controller/controller");
const creatorRouter = require('./routes/creatorauth')

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const JobRoute = express.Router();

app.use('/creator', creatorRouter)
app.use('/api', JobRoute);
JobRoute.post("/jobpost", CreateJobPost);
JobRoute.get("/jobpost", GetJobPost);
JobRoute.post("/applyjob", CreateApplyPost);






app.listen(process.env.PORT || 5000, ()=> {
    try {
      connection
      console.log("Server Has Started at Port 5000.")
    } catch (error) {
      console.log("Something went wrong!!")
    }
});


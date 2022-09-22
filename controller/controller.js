const JobPost = require("../models/JobPost.model");
const JobApply = require("../models/JobApply.model");


// Create JOb Post 
const CreateJobPost = async(req, res)=> {
        const NewJobPost = new JobPost(req.body);

        try {
            const savedForm = await NewJobPost.save();
            return res.statua(200).json(savedForm)
        } catch (error) {
            return res.status(500).json(error);
        }

};


// Get JOb Post Details
const GetJobPost = async(req, res)=> {
        try {
            const allData = await JobPost.find().sort({createdAt:-1})
            return res.json(allData);
        } catch (error) {
            return res.json(error);
        }
};


// Create Applyed job Post
const CreateApplyPost = async(req, res)=> {
    const NewApplyPost = new JobApply(req.body);
        try {
            const savedForm = await NewApplyPost.save();
            return res.statua(200).json(savedForm)
        } catch (error) {
            return res.status(500).json(error);
        }
   
};






module.exports = {
    CreateJobPost,
    GetJobPost,
    CreateApplyPost,
}
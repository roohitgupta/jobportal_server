const JobPost = require("../models/JobPost.model");
const JobApply = require("../models/JobApply.model");



const CreateJobPost = async(req, res)=> {
        const NewJobPost = new JobPost(req.body);

        try {
            const savedForm = await NewJobPost.save();
            return res.statua(200).json(savedForm)
        } catch (error) {
            return res.status(500).json(error);
        }

};

const GetJobPost = async(req, res)=> {
        try {
            const allData = await JobPost.find()
            return res.json(allData);
        } catch (error) {
            return res.json(error);
        }
};






module.exports = {
    CreateJobPost,
    GetJobPost,
}
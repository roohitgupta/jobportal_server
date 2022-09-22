const mongoose = require('mongoose')
const bcrypt= require("bcrypt")


const seekarSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    type: {type:String, default:"Applier"}
   
})


seekarSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

seekarSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const seekarModel = mongoose.model("JobApplier",seekarSchema)

module.exports = seekarModel
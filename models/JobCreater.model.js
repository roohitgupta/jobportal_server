const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const creatorSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    type: {type:String, default:"JobPoster"}
})


creatorSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

creatorSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const creatorModel = mongoose.model("JobPoster", creatorSchema)

module.exports = creatorModel;
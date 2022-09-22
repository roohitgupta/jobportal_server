const CreatorModel = require("../models/JobCreater.model")

const Register = async (req, res) => {
    try {
        const user = await CreatorModel(req.body)    
        user.save()
        res.status(200).send(user)
    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
}

 const Login = async (req, res) => {
    try {

        const email = await CreatorModel.findOne({ email: req.body.email })
        if (!email) {
            return res.status(400).send("Wrong email or password")
        }

        const match = email.checkPassword(req.body.password)

        if (!match) {
            return res.status(400).send({ message: "Wrong Email or Password" })
        }

        return res.status(200).send(email)
    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
}


creatorRouter.get("/creators", async (req, res) => {
    try {
        const creators = await CreatorModel.find()   
        
        res.status(200).send(creators)
    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

module.exports = {
    creatorRouter,
    Register,
    Login,
}
    
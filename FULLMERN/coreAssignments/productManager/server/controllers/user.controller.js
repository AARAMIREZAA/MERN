const {User} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {
    User.exists({email : req.body.email})
        .then(userExists => {
            // IS USER EXISTS, SEND BACK AN ERROR
            if(userExists){
                return Promise.reject({
                    errors: {"duplicate": "Email already taken"}
                })
            }
            else{
                const newUser = new User(req.body)
                return newUser.save()
            }
        })
        .then(user => {
            console.log(user)
            return res.json(user)
        })
        .catch(err => {
            console.log(err)
            return res.status(400).json(err)
        })
}

module.exports.login = (req,res) => {
    // CHECK TO SEE IF THE EMAIL EXISTS
    User.findOne({email : req.body.email})
        .then(user => {
            if(user === null){
                console.log(user)
                return res.status(400).json({msg: "INVALID LOGIN"}) //failing here
            }
            else{
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid => {
                        if(passwordIsValid){
                            const newJWT = jwt.sign({
                                _id:user._id
                            }, "SECRET_KEY")
                            res.cookie("usertoken", newJWT, {httpOnly:true}).json("success")
                        }
                        else{
                            res.status(400).json({msg:"INVALID ATTEMPT"})
                        }
                    })
            }
        })

}
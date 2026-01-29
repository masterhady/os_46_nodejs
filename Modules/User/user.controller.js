import userModel from "../../Database/Models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const signup = async (req,res) => {
    // let user =  new userModel(req.body)
    // let foundUser = await userModel.findOne({email: req.body.email})
    // if(foundUser){
    //     res.status(409).json({message: "email already exist"})
    // }else{
        // req.body.password = bcrypt.hashSync(req.body.password,8)
        // console.log(req.body.password)
        let addUser = await userModel.insertMany(req.body) // data save db 
        // let addUser = await user.save()
        addUser[0].password = undefined // remove object
        res.status(201).json({message: "created", data: addUser})
    // }
   
}


const signin  = async (req,res) => {
    // console.log(foundUser, "new user ")
    // res.send("signin")
    let foundUser = await userModel.findOne({email: req.body.email})
    // if (foundUser){
        // verify pass
       let matchPass =  bcrypt.compareSync(req.body.password, foundUser.password)
       if(matchPass){
        // create token 
        let token = jwt.sign({_id: foundUser.id, role: foundUser.role, name: foundUser.name }, "iti")
            res.status(200).json({message: "Welcome in our app", data: foundUser, token: token})
       }else{
            res.status(422).json({message: " invalid password"})
       }
    // }else{
    //     res.status(404).json({message: "User not found, please signup"})
    // }
}


export {
    signup,
    signin
}

/// email, name, age, password
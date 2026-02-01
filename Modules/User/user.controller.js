import userModel from "../../Database/Models/user.model.js"
import bcrypt from "bcrypt"
import jwt, { decode } from "jsonwebtoken"
import sendEmail from "../../Email/email.js"
import catchError from "../../Middleware/catchError.js"
const signup = async (req,res) => {
    // his dat --> email --> send email --> db --> confirm
    let addUser = await userModel.insertMany(req.body) // data save db 
    sendEmail(req.body.email) // 
    addUser[0].password = undefined // remove object
    res.status(201).json({message: "created", data: addUser})
}


const signin  = catchError( async (req,res) => {
    // let foundUser = await userModel.findOne({email: req.body.email})
    let foundUser = req.foundUser
       let matchPass =  bcrypt.compareSync(req.body.password, foundUser.password)
       if(matchPass){
        let token = jwt.sign({_id: foundUser.id, role: foundUser.role, name: foundUser.name }, "iti")
            if(foundUser.isConfirmed == false){
                return res.status(401).json({message: "Please verify your account"})
            }

        res.status(200).json({message: "Welcome in our app", data: foundUser, token: token})
       }else{
            res.status(422).json({message: "invalid password or email"})
       }
}
)

const deleteUser = catchError( async(req,res) => {
    const id = req.params.id
    const deletedUser = await userModel.findByIdAndDelete(id)
    await deletedUser.deleteOne()   // call the hook
    res.status(200).json({message: "deleted", data: deletedUser})
}
)

const verifyAccount = async (req,res) => {
    jwt.verify(req.params.email, "myEmail", async(err, decode)=> {
        if(err){
            return res.status(401).json({message: "invalid token"})
        }
        await userModel.findOneAndUpdate({email: decode}, {isConfirmed: true})
        res.status(200).json({message: "verified"})
    })

    // const email = req.params.email
    // console.log(email)
    // res.json({email: email})
}


export {
    signup,
    signin,
    deleteUser,
    verifyAccount
}

/// email, name, age, password
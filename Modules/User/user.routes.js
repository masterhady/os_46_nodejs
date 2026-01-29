import express from "express";
import { signup, signin } from "./user.controller.js";
import { checkEmail } from "../../Middleware/chackEmail.js";
import { hashPass } from "../../Middleware/hashPass.js";

const userRouter = express.Router()

userRouter.post("/signup",checkEmail,hashPass, signup);

userRouter.post("/signin",checkEmail, signin)

export default userRouter

// sign up  --> create --> post 

// sign in  --> post 


//  email --> user --> email --> post 
// posts --> get posts --> db 

// 
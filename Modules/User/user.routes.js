import express from "express";
import { signup, signin, deleteUser, verifyAccount } from "./user.controller.js";
import { checkEmail } from "../../Middleware/chackEmail.js";
import { hashPass } from "../../Middleware/hashPass.js";
import { validationMiddleware } from "../../Middleware/validationMiddleware.js";
import catchError from "../../Middleware/catchError.js";
const userRouter = express.Router()

userRouter.post("/signup",validationMiddleware,catchError(checkEmail),hashPass, signup);

userRouter.post("/signin",checkEmail, signin)

userRouter.delete("/users/:id", deleteUser)

userRouter.get("/verify/:email", verifyAccount)

export default userRouter

// sign up  --> create --> post 

// sign in  --> post 


//  email --> user --> email --> post 
// posts --> get posts --> db 

// 
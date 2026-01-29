import express from "express";
import { dbConnection } from "./Database/dbconnection.js";
import userModel from "./Database/Models/user.model.js";
import userRouter from "./Modules/User/user.routes.js";
import { noteModel } from "./Database/Models/note.model.js";
import noteRouter from "./Modules/Note/note.routes.js";

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(noteRouter)

dbConnection;
userModel;
noteModel;

// let x = false;

// // middleware
// const isAuth = (req,res, next) =>{
//     if(x){
//         next()
//     }else{
//         res.send("Unauthorized")
//     }
// }

// app.get("/users", isAuth, (req,res) => {
    
// })





app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
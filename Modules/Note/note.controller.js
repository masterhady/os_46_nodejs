import jwt from "jsonwebtoken"
import { noteModel } from "../../Database/Models/note.model.js"



const createNote = async(req,res) => {
    // res.send("create note")

    let token = req.headers.token // token
    console.log(token) // verify token 
    jwt.verify(token, "iti", async(err, decoded) => {
        // console.log(decoded) // stopppppp
        // console.log(err)
    })

    let addedNote = await noteModel.insertMany(req.body)
    res.status(201).json({message: "created", data: addedNote})
}


const getNotes = async(req,res) => {
    const notes = await noteModel.find().select(["title","content"]).populate("createdBy")
    res.status(200).json({message: "success", data: notes})
}

export {
    createNote,
    getNotes
}
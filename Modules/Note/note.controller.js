import jwt from "jsonwebtoken"
import { noteModel } from "../../Database/Models/note.model.js"



const createNote = async(req,res) => {
    req.body.createdBy = req.user._id // get decoded --> from middleware
    let addedNote = await noteModel.insertMany(req.body)
    res.status(201).json({message: "created", data: addedNote})
}


const getNotes = async(req,res) => {
    const notes = await noteModel.find({createdBy: req.user._id}).select(["title","content", "createdBy"]).populate("createdBy")  // forign key  
    res.status(200).json({message: "success", data: notes})
}

const deleteNote = async(req,res) => {
    // only user owned the note can delete it
    // const id = req.params.id
    const deleteNote = await noteModel.findOneAndDelete({
        _id: req.params.id,
        createdBy: req.user._id
    })

    if(!deleteNote){
        return res.status(404).json({message: "Note not found or you are not the owner"})
    }

    res.status(200).json({message: "deleted", data: deleteNote})
}



export {
    createNote,
    getNotes,
    deleteNote
}
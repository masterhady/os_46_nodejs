import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({

    title: String,
    content: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User" // reference to User model 
    }

}, {
    timestamps: true,
    versionKey: false
})

export const noteModel = mongoose.model("Note", noteSchema)
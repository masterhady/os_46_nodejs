import mongoose from "mongoose";
import {noteModel} from "./note.model.js";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 50,
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
},{
    timestamps: true,
    versionKey: false,// disable __v field
    // password: false
})
// timestamp --> created_at, updated_at 

// model --> table 

userSchema.pre("deleteOne", {document: true}, async function(){
    await noteModel.deleteMany({createdBy: this._id});
})


const userModel = mongoose.model("User",userSchema )
export default userModel;
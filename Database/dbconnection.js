import mongoose from "mongoose";

export const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/note_app_46")
.then(() => {
    console.log("Database connected");
})

.catch((err) => {
    console.log(err);
});
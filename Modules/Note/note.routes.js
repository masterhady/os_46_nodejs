

import express from "express";
import { createNote, deleteNote, getNotes } from "./note.controller.js";
import { verifyToekn } from "../../Middleware/verifyToken.js";

const noteRouter = express.Router()
// create note
noteRouter.use(verifyToekn) // all req
noteRouter.post("/notes", createNote) // one req
noteRouter.get("/notes", getNotes)
noteRouter.delete("/notes/:id", deleteNote)

export default noteRouter
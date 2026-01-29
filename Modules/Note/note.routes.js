

import express from "express";
import { createNote, getNotes } from "./note.controller.js";

const noteRouter = express.Router()
// create note
noteRouter.post("/notes", createNote)
noteRouter.get("/notes", getNotes)

export default noteRouter
import { Router } from "express";
import { NotesControllers } from "../controllers/notes.controllers";

export const notesRoutes = Router()
const notesControllers = new NotesControllers

notesRoutes.post('/:userId/create', notesControllers.create)
// notesRoutes.post('/userId/search', notesControllers.create)
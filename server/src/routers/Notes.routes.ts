import { Router } from "express";
import { NotesControllers } from "../controllers/notes.controllers";
import { authenticator } from "../middlewares/authenticator";

export const notesRoutes = Router()
const notesControllers = new NotesControllers

notesRoutes.use(authenticator)

notesRoutes.post('/create', notesControllers.create)
notesRoutes.get('/search', notesControllers.search)
notesRoutes.get('/show/:noteId', notesControllers.show)
notesRoutes.delete('/delete/:noteId', notesControllers.delete)
import { Router } from "express";
import { NotesControllers } from "../controllers/notes.controllers";

export const notesRoutes = Router()
const notesControllers = new NotesControllers

notesRoutes.post('/:usersId/create', notesControllers.create)
notesRoutes.get('/:usersId/search', notesControllers.search)
notesRoutes.get('/:usersId/show/:noteId', notesControllers.show)
notesRoutes.delete('/delete/:noteId', notesControllers.delete)
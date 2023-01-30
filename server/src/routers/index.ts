import { Router } from 'express';
import { notesRoutes } from './Notes.routes';
import { userRoutes } from './user.routes';

export const routes = Router()

routes.use('/user', userRoutes)
routes.use('/notes', notesRoutes)
import { Router } from 'express';
import { notesRoutes } from './Notes.routes';
import { tagsRoutes } from './Tags.routes';
import { userRoutes } from './user.routes';

export const routes = Router()

routes.use('/user', userRoutes)
routes.use('/notes', notesRoutes)
routes.use('/tags', tagsRoutes)